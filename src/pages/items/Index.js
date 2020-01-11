import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Input, Container, Row, Col } from 'reactstrap';
import { APP_URL } from '../../helper/config';
import { connect } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Content/Table';
import NumberFormat from 'react-number-format';
import SearchBar from '../../components/Content/SearchBar';
import Select from 'react-select';

import { getItems, getRestaurantItems, deleteItem } from '../../redux/action/item';
import { getCategories } from '../../redux/action/category';

const ItemIndex = (props) => {

    const [isModalOpen, setModalOpen] = useState(false)
    const [isFetched, setFetched] = useState(false)
    const [itemId, setItemId] = useState(null)

    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState(false)

    const [name, setName] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [sortBy, setSortBy] = useState('updated_at')
    const [sortDir, setSortDir] = useState('asc')
    const [count, setCount] = useState(10)

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

    const handleSearch = async () => {
        setFetched(false)
        var search = []
        var sort = []
        if (name !== '') {
            search['name'] = name
        } else if (minPrice !== '') {
            search['min_price'] = minPrice
        } else if (maxPrice !== '') {
            search['max_price'] = maxPrice
        }
        sort[sortBy] = sortDir
        var perPage = count
        const data = {
            search,
            sort,
            perPage
        }
        await props.dispatch(getItems(data))
        setFetched(true)
    }

    const handleChangePage = async (link) => {
        setFetched(false)
        await props.dispatch(getItems(link))
        setFetched(true)
    }

    useEffect(() => {
        const fetchData = async () => {
            if (props.auth.data.role === 'administrator' || localStorage.getItem('role') === 'administrator') {
                await props.dispatch(getItems())
                setFetched(true)
            } else if (props.auth.data.role === 'restaurant' || localStorage.getItem('role') === 'restaurant') {
                await props.dispatch(getRestaurantItems())
                setFetched(true)
            }
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
            {localStorage.getItem('role') === 'administrator'
                ? <Link to="/admin/item/create" className="btn btn-success btn-block mt-3 mb-3"><i className="fa fa-plus"></i> Add New</Link>
                : <Link to="/restaurant/item/create" className="btn btn-success btn-block mt-3 mb-3"><i className="fa fa-plus"></i> Add New</Link>
            }
            <Container>
                <Row>
                    <Col md={12}>
                        <SearchBar customPlaceholder="Search By Name..." onValueChanged={data => setName(data)} />
                    </Col>
                    <Col md={6}>
                        <NumberFormat
                            placeholder="Minimum Price"
                            className="form-control"
                            prefix={'Rp.'}
                            thousandSeparator={'.'}
                            decimalSeparator={','}
                            value={minPrice}
                            onValueChange={e => setMinPrice(e.value)} />
                    </Col>
                    <Col md={6}>
                        <NumberFormat
                            placeholder="Maximum Price"
                            className="form-control"
                            prefix={'Rp.'}
                            thousandSeparator={'.'}
                            decimalSeparator={','}
                            value={maxPrice}
                            onValueChange={e => setMaxPrice(e.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <select className="form-control" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                            <option value="name">Name</option>
                            <option value="price">Price</option>
                            <option value="updated_at">Timestamp</option>
                        </select>
                    </Col>
                    <Col md={5}>
                        <select className="form-control" value={sortDir} onChange={e => setSortDir(e.target.value)}>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </Col>
                    <Col md={2}>
                        <input type="number" className="form-control" value={count} onChange={e => setCount(e.target.value)} />
                    </Col>
                    <Col md={12}>
                        <button onClick={handleSearch} className="btn btn-primary btn-block"><i className="fa fa-search"></i></button>
                    </Col>
                </Row>
            </Container>
            {isFetched
                ? <Table
                    columns={columns}
                    data={props.item.data.items}
                    pagination={props.item.data.pagination}
                    actionPage={link => handleChangePage(link)}
                    sortable fillterable
                />
                : <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <i className="fa fa-lg fa-spinner fa-spin"></i>
                        </Col>
                    </Row>
                </Container>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        item: state.item,
        auth: state.auth,
        category: state.category
    }
}

export default connect(mapStateToProps)(ItemIndex)