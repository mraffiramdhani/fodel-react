import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { APP_URL } from '../../helper/config';
import { connect } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Content/Table';
import NumberFormat from 'react-number-format';

import { getItems, getRestaurantItems, deleteItem } from '../../redux/action/item';

const ItemIndex = (props) => {

    const [isModalOpen, setModalOpen] = useState(false)
    const [data, setData] = useState([])
    const [isFetched, setFetched] = useState(false)
    const [itemId, setItemId] = useState(null)

    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState(false)

    const onDismiss = () => setVisible(false)

    const handleModalClose = useCallback(() => {
        setModalOpen(!isModalOpen)
    }, [isModalOpen])

    const handleDeleteModalOpen = useCallback((e, id) => {
        e.preventDefault()
        setModalOpen(!isModalOpen)
        setItemId(id)
    }, [isModalOpen])

    const handleTriggerAction = async (e) => {
        e.preventDefault()
        setFetched(false)
        await props.dispatch(deleteItem(itemId))
        if (props.auth.data.role === 'administrator') {
            await props.dispatch(getItems())
        } else {
            await props.dispatch(getRestaurantItems())
        }
        setModalOpen(!isModalOpen)
        setFetched(!props.item.isLoading)
        setStatus(true)
        setVisible(true)
    }

    useEffect(() => {
        const fetchData = async () => {
            if (props.auth.data.role === 'administrator') {
                await props.dispatch(getItems())
            } else {
                await props.dispatch(getRestaurantItems())
            }

            setFetched(true)
        }
        fetchData()
    }, [])

    const columns = useMemo(() => [
        {
            Header: 'ID',
            accessor: 'id',
            Cell: ({ row }) => (<div>{row.index + 1}</div>)
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Price',
            accessor: 'price',
            Cell: ({ row }) => {
                return (
                    <NumberFormat
                        displayType={'text'}
                        thousandSeparator={','}
                        prefix={'Rp.'}
                        value={row.original.price} />
                )
            }
        },
        {
            Header: 'Image',
            accessor: 'images',
            Cell: ({ row }) => {
                const data = row.original
                return (
                    <div>
                        {data.images.length !== 0
                            ? <img
                                alt={data.name}
                                src={data.images[0].filename.substr(0, 4) === 'http'
                                    ? data.images[0].filename
                                    : APP_URL.concat('/images/' + data.images[0].filename)}
                                width="40px"
                                height="40px"
                            />
                            : "No Image"}
                    </div>
                )
            }
        },
        {
            Header: 'Category',
            accessor: 'category',
            Cell: ({ row }) => {
                var arr = []
                for (var i = 0; i < row.original.category.length; i++) {
                    arr.push(row.original.category[i].name)
                }
                return (
                    <div>
                        {arr.join(', ')}
                    </div>
                )
            }
        },
        {
            Header: 'Option',
            id: 'option',
            accessor: 'id',
            Cell: ({ row }) => (
                <div>
                    <Link to={"/admin/item/edit/" + row.original.id} className="btn btn-warning"><i className="fa fa-edit"></i></Link>{" "}
                    <Link to="#" onClick={(e) => handleDeleteModalOpen(e, row.original.id)} className="btn btn-danger" > <i className="fa fa-trash"></i> </Link >
                </div>
            ),
        }
    ], [handleDeleteModalOpen])

    return (
        <div>
            {props.item.count > 0 && isFetched &&
                <Alert color={status === true ? "success" : "danger"} className="mt-3 mb-3" isOpen={visible} toggle={onDismiss}>
                    Item Deleted Successfully.
                </Alert>
            }
            <Modal isOpen={isModalOpen} triggerAction={handleTriggerAction} triggerCancel={handleModalClose} title="Delete Item" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Link to="/admin/item/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            {isFetched && <Table columns={columns} data={props.item.data.items} sortable fillterable />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        item: state.item,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(ItemIndex)