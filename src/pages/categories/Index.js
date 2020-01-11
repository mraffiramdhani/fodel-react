import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Content/Table';
import { getCategories, deleteCategory } from '../../redux/action/category';

const CategoryIndex = (props) => {

    const [isModalOpen, setModalOpen] = useState(false)
    const [isFetched, setFetched] = useState(false)
    const [catId, setCatId] = useState(null)

    const [isVisible, setVisible] = useState(false)
    const [isStatus, setStatus] = useState(false)

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
        await props.dispatch(deleteCategory(catId))
        await props.dispatch(getCategories())
        setModalOpen(!isModalOpen)
        setFetched(!props.category.isLoading)
        setVisible(true)
        setStatus(props.category.isSuccess)
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
            <Link to="/admin/category/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            {isFetched && <Table columns={columns} data={props.category.data.categories} sortable fillterable />}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        category: state.category
    }
}

export default connect(mapStateToProps)(CategoryIndex)