import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Content/Table';
import SearchBar from '../../components/Content/SearchBar';
import { getUsers, deleteUser } from '../../redux/action/user';

const UserIndex = (props) => {

    const [isModalOpen, setModalOpen] = useState(false)
    const [isFetched, setFetched] = useState(false)
    const [userId, setUserId] = useState(null)

    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState(false)

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
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
        setUserId(id)
    }, [isModalOpen])

    const handleTriggerAction = async (e) => {
        e.preventDefault()
        setFetched(false)
        await props.dispatch(deleteUser(userId))
        await props.dispatch(getUsers())
        setModalOpen(!isModalOpen)
        setFetched(!props.user.isLoading)
        setStatus(true)
        setVisible(true)
    }

    const handleSearch = async () => {
        setFetched(false)
        var search = []
        var sort = []
        if(name !== ''){
            search['name'] = name
        }
        if(username !== ''){
            search['username'] = username
        }
        if(email !== ''){
            search['email'] = email
        }
        sort[sortBy] = sortDir
        var perPage = count
        const data = {
            search,
            sort,
            perPage
        }
        await props.dispatch(getUsers(data))
        setFetched(true)
    }

    const handleChangePage = async (link) => {
        setFetched(false)
        await props.dispatch(getUsers(link))
        setFetched(true)
    }

    useEffect(() => {
        const fetchData = async () => {
            await props.dispatch(getUsers())
            setFetched(!props.user.isLoading)
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
            Header: 'Username',
            accessor: 'username'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Role',
            accessor: 'role_id',
            Cell: ({ row }) => (
                <div>
                    {row.original.role_id === 2 ? "Restaurant" : "Customer"}
                </div>
            )
        },
        {
            Header: 'Option',
            id: 'option',
            accessor: 'id',
            Cell: ({ row }) => (
                <div>
                    <Link to={"/admin/user/edit/" + row.original.id} className="btn btn-warning"><i className="fa fa-edit"></i></Link>{" "}
                    <Link to="#" onClick={(e) => handleDeleteModalOpen(e, row.original.id)} className="btn btn-danger" > <i className="fa fa-trash"></i> </Link >
                </div>
            ),
        }
    ], [handleDeleteModalOpen])

    return (
        <div>
            {props.user.count > 0 && isFetched &&
                <Alert color={status === true ? "success" : "danger"} className="mt-3 mb-3" isOpen={visible} toggle={onDismiss}>
                    User Deleted Successfully.
                </Alert>
            }
            <Modal isOpen={isModalOpen} triggerAction={handleTriggerAction} triggerCancel={handleModalClose} isLoading={props.user.isLoading} title="Delete User" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Link to="/admin/user/create" className="btn btn-success btn-block mt-3 mb-3"><i className="fa fa-plus"></i> Add New</Link>
            <Container>
                <Row>
                    <Col md={3}>
                        <SearchBar customPlaceholder="Search By Name..." onValueChanged={data => setName(data)} />
                    </Col>
                    <Col md={3}>
                        <SearchBar customPlaceholder="Search By Username..." onValueChanged={data => setUsername(data)} />
                    </Col>
                    <Col md={3}>
                        <SearchBar customPlaceholder="Search By Email..." onValueChanged={data => setEmail(data)} />
                    </Col>
                    <Col md={3}>
                        <button onClick={handleSearch} className="btn btn-primary btn-block"><i className="fa fa-search"></i></button>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <select className="form-control" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                            <option value="name">Name</option>
                            <option value="username">Username</option>
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
            {isFetched ?
                <>
                    <Table
                        columns={columns}
                        data={props.user.data.users}
                        pagination={props.user.data.pagination}
                        actionPage={link => handleChangePage(link)}
                        sortable fillterable />
                </>
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
        user: state.user
    }
}

export default connect(mapStateToProps)(UserIndex)