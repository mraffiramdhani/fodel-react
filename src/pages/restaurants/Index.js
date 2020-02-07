import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { APP_IMAGE_URL } from '../../helper/config';
import { Link } from 'react-router-dom';
import { Alert, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Content/Table';
import SearchBar from '../../components/Content/SearchBar';
import { getRestaurants, deleteRestaurant, patchRestaurantStatus } from '../../redux/action/restaurant';

const RestaurantIndex = (props) => {

    const [isModalOpen, setModalOpen] = useState(false)
    const [isModalApproveOpen, setApproveOpen] = useState(false)
    const [isFetched, setFetched] = useState(false)
    const [restId, setRestId] = useState(null)

    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState(false)

    const onDismiss = () => setVisible(false)

    const [name, setName] = useState('')
    const [sortBy, setSortBy] = useState('updated_at')
    const [sortDir, setSortDir] = useState('asc')
    const [count, setCount] = useState(10)

    const handleModalClose = useCallback(() => {
        setModalOpen(!isModalOpen)
    }, [isModalOpen])

    const handleDeleteModalOpen = useCallback((e, id) => {
        e.preventDefault()
        setModalOpen(!isModalOpen)
        setRestId(id)
    }, [isModalOpen])

    const handleApproveModalOpen = useCallback((e, id) => {
        e.preventDefault()
        setApproveOpen(!isModalApproveOpen)
        setRestId(id)
    }, [isModalApproveOpen])

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

    const handleSearch = async () => {
        setFetched(false)
        var search = []
        var sort = []
        if (name !== '') {
            search['name'] = name
        }
        sort[sortBy] = sortDir
        var perPage = count
        const data = {
            search,
            sort,
            perPage
        }
        await props.dispatch(getRestaurants(data))
        setFetched(true)
    }

    const handleChangePage = async (link) => {
        setFetched(false)
        await props.dispatch(getRestaurants(link))
        setFetched(true)
    }

    const handleApprove = async (e) => {
        e.preventDefault()
        setFetched(false)
        await props.dispatch(patchRestaurantStatus(restId))
        await props.dispatch(getRestaurants())
        setApproveOpen(!isModalApproveOpen)
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
                        {img !== null
                            ? <img
                                alt={row.original.name}
                                src={img.substr(0, 4) === 'http' ? img : APP_IMAGE_URL.concat('/' + img)}
                                width="40"
                                height="40"
                            />
                            : 'No Image'
                        }
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
            Header: 'Option',
            id: 'option',
            accessor: 'id',
            Cell: ({ row }) => {
                if (row.original.active === 0) {
                    return (
                        <div>
                            <a href="javascript:void(0)" onClick={(e) => handleApproveModalOpen(e, row.original.id)} title="Approve" className="btn btn-success"><i className="fa fa-check"></i></a>
                            {" "}
                            <a href="javascript:void(0)" onClick={(e) => handleDeleteModalOpen(e, row.original.id)} title="Reject" className="btn btn-danger"><i className="fa fa-close"></i></a>
                        </div>
                    )
                }
                else {
                    return (
                        <div>
                            <Link to={"/admin/restaurant/edit/" + row.original.id} className="btn btn-warning"><i className="fa fa-edit"></i></Link>{" "}
                            <Link to="#" className="btn btn-danger" onClick={(e) => handleDeleteModalOpen(e, row.original.id)} > <i className="fa fa-trash"></i> </Link >
                        </div>
                    )
                }
            },
        }
    ], [handleDeleteModalOpen])

    return (
        <div>
            {props.restaurant.count > 0 && isFetched &&
                <Alert color={status === true ? "success" : "danger"} className="mt-3 mb-3" isOpen={visible} toggle={onDismiss}>
                    Action Success.
                </Alert>
            }
            <Modal isOpen={isModalOpen} triggerAction={handleTriggerAction} triggerCancel={handleModalClose} isLoading={props.restaurant.isLoading} title="Delete Restaurant" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Modal isOpen={isModalApproveOpen} triggerAction={handleApprove} triggerCancel={() => setApproveOpen(!isModalApproveOpen)} isLoading={props.restaurant.isLoading} title="Approve Restaurant" isType="create">
                You will approve this restaurant. Continue?
            </Modal>
            <Link to="/admin/restaurant/create" className="btn btn-success btn-block mt-3 mb-3"><i className="fa fa-plus"></i> Add New</Link>
            <Container>
                <Row>
                    <Col md={10}>
                        <SearchBar customPlaceholder="Search By Name..." onValueChanged={data => setName(data)} />
                    </Col>
                    <Col md={2}>
                        <button onClick={handleSearch} className="btn btn-primary btn-block"><i className="fa fa-search"></i></button>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <select className="form-control" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                            <option value="name">Name</option>
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
                </Row>
            </Container>
            {isFetched
                ? <Table
                    columns={columns}
                    data={props.restaurant.data.restaurants}
                    pagination={props.restaurant.data.pagination}
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
        restaurant: state.restaurant
    }
}

export default connect(mapStateToProps)(RestaurantIndex)