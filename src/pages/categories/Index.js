import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Content/Table';
import SearchBar from '../../components/Content/SearchBar';
import { getCategories, deleteCategory } from '../../redux/action/category';

const CategoryIndex = (props) => {

    const [isModalOpen, setModalOpen] = useState(false)
    const [isFetched, setFetched] = useState(false)
    const [catId, setCatId] = useState(null)

    const [isVisible, setVisible] = useState(false)
    const [isStatus, setStatus] = useState(false)

    const [name, setName] = useState('')
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
        setCatId(id)
    }, [isModalOpen])

    const handleTriggerAction = async (e) => {
        e.preventDefault()
        setFetched(false)
        await props.dispatch(deleteCategory(catId))
        await props.dispatch(getCategories())
        setModalOpen(!isModalOpen)
        setFetched(!props.category.isLoading)
        setVisible(true)
        setStatus(props.category.isSuccess)
    }

    const handleSearch = async () => {
        setFetched(false)
        var search = []
        var sort = []
        search['name'] = name
        var perPage = count
        const data = {
            search,
            perPage
        }
        await props.dispatch(getCategories(data))
        setFetched(true)
    }

    const handleChangePage = async (link) => {
        setFetched(false)
        await props.dispatch(getCategories(link))
        setFetched(true)
    }

    useEffect(() => {
        const fetchData = async () => {
            await props.dispatch(getCategories())
            setFetched(!props.category.isLoading)
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
            Header: 'Option',
            id: 'option',
            accessor: 'id',
            Cell: ({ row }) => (
                <div>
                    <Link to={"/admin/category/edit/" + row.original.id} className="btn btn-warning"><i className="fa fa-edit"></i></Link>{" "}
                    <Link to="#" className="btn btn-danger" onClick={(e) => handleDeleteModalOpen(e, row.original.id)} > <i className="fa fa-trash"></i> </Link >
                </div>
            ),
        }
    ], [handleDeleteModalOpen])

    return (
        <div>
            {props.category.count > 0 && isFetched &&
                <Alert color={isStatus === true ? "success" : "danger"} className="mt-3 mb-3" isOpen={isVisible} toggle={onDismiss}>
                    Category Deleted Successfully.
                </Alert>
            }
            <Modal isOpen={isModalOpen} triggerAction={handleTriggerAction} triggerCancel={handleModalClose} isLoading={props.category.isLoading} title="Delete Category" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Link to="/admin/category/create" className="btn btn-success btn-block mt-3 mb-3"><i className="fa fa-plus"></i> Add New</Link>
            <Container>
                <Row>
                    <Col md={10}>
                        <SearchBar customPlaceholder="Search By Name..." onValueChanged={data => setName(data)} />
                    </Col>
                    <Col md={2}>
                        <input type="number" className="form-control" value={count} onChange={e => setCount(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <button onClick={handleSearch} className="btn btn-primary btn-block"><i className="fa fa-search"></i></button>
                    </Col>
                </Row>
            </Container>
            {isFetched
                ? <Table
                    columns={columns}
                    data={props.category.data.categories}
                    pagination={props.category.data.pagination}
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
        category: state.category
    }
}

export default connect(mapStateToProps)(CategoryIndex)