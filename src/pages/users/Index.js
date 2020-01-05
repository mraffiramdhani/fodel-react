import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { APP_URL, USER_TOKEN } from '../../helper/config';
import axios from 'axios';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Content/Table';

const UserIndex = (props) => {

    const [isModalOpen, setModalOpen] = useState(false)
    const [data, setData] = useState([])
    const [isFetched, setFetched] = useState(false)
    const [userId, setUserId] = useState(null)

    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState(false)
    const [message, setMessage] = useState('')

    const onDismiss = () => setVisible(false)

    const handleModalClose = useCallback(() => {
        setModalOpen(!isModalOpen)
    }, [isModalOpen])

    const handleDeleteModalOpen = useCallback((e, id) => {
        e.preventDefault()
        setModalOpen(!isModalOpen)
        setUserId(id)
    }, [isModalOpen])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                APP_URL.concat('/user'),
                USER_TOKEN)

            setData(result.data.data)
        }
        fetchData().then(() => {
            setFetched(true)
        })
    }, [isFetched])

    const handleTriggerAction = async (e) => {
        e.preventDefault()
        setFetched(false)
        await axios.delete(APP_URL.concat('/user/' + userId), USER_TOKEN).then((result) => {
            if (result.data.success === true) {
                setModalOpen(!isModalOpen)
                setStatus(true)
                setVisible(true)
                setMessage(result.data.message)
            }
        })
    }

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
            <Alert color={status === true ? "success" : "danger"} className="mt-3 mb-3" isOpen={visible} toggle={onDismiss}>
                {message}
            </Alert>
            <Modal isOpen={isModalOpen} triggerAction={handleTriggerAction} triggerCancel={handleModalClose} title="Delete User" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Link to="/admin/user/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            {isFetched && <Table columns={columns} data={data} sortable fillterable />}
        </div>
    )

}

export default UserIndex