import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { APP_URL } from '../../helper/config';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Content/Table';
import { getRestaurants, deleteRestaurant } from '../../redux/action/restaurant';

const RestaurantIndex = (props) => {

    const [isModalOpen, setModalOpen] = useState(false)
    const [isFetched, setFetched] = useState(false)
    const [restId, setRestId] = useState(null)

    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState(false)

    const onDismiss = () => setVisible(false)

    const handleModalClose = useCallback(() => {
        setModalOpen(!isModalOpen)
    }, [isModalOpen])

    const handleDeleteModalOpen = useCallback((e, id) => {
        e.preventDefault()
        setModalOpen(!isModalOpen)
        setRestId(id)
    }, [isModalOpen])

    const handleTriggerAction = async (e) => {
        e.preventDefault()
        setFetched(false)
        await props.dispatch(deleteRestaurant(restId))
        await props.dispatch(getRestaurants())
        setModalOpen(!isModalOpen)
        setFetched(!props.restaurant.isLoading)
        setStatus(true)
        setVisible(true)
    }

    useEffect(() => {
        const fetchData = async () => {
            await props.dispatch(getRestaurants())
            setFetched(!props.restaurant.isLoading)
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
            Header: 'Logo',
            accessor: 'logo',
            Cell: ({ row }) => {
                const img = row.original.logo
                return (
                    <div>
                        <img
                            alt={row.original.name}
                            src={img.substr(0, 4) === 'http' ? img : APP_URL.concat('/logos/' + img)}
                            width="40"
                            height="40"
                        />
                    </div>
                )
            }
        },
        {
            Header: 'Location',
            accessor: 'longitude',
            Cell: ({ row }) => (
                <span>Long: {row.original.longitude} | Lat: {row.original.latitude}</span>
            )
        },
        {
            Header: 'Owner',
            accessor: 'owner',
            Cell: ({ row }) => (
                <div>
                    {row.original.owner}
                </div>
            )
        },
        {
            Header: 'Option',
            id: 'option',
            accessor: 'id',
            Cell: ({ row }) => (
                <div>
                    <Link to={"/admin/restaurant/edit/" + row.original.id} className="btn btn-warning"><i className="fa fa-edit"></i></Link>{" "}
                    <Link to="#" className="btn btn-danger" onClick={(e) => handleDeleteModalOpen(e, row.original.id)} > <i className="fa fa-trash"></i> </Link >
                </div>
            ),
        }
    ], [handleDeleteModalOpen])

    return (
        <div>
            {props.restaurant.count > 0 && isFetched &&
                <Alert color={status === true ? "success" : "danger"} className="mt-3 mb-3" isOpen={visible} toggle={onDismiss}>
                    Restaurant Deleted Successfully.
                </Alert>
            }
            <Modal isOpen={isModalOpen} triggerAction={handleTriggerAction} triggerCancel={handleModalClose} title="Delete Restaurant" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Link to="/admin/restaurant/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            {isFetched && <Table columns={columns} data={props.restaurant.data.restaurants} sortable fillterable />}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        restaurant: state.restaurant
    }
}

export default connect(mapStateToProps)(RestaurantIndex)