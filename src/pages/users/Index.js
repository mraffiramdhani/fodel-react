import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { APP_URL } from '../../helper/config';
import axios from 'axios';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Content/Table';
import DummyUser from '../../data/user';

const UserIndex = () => {

    const [isModalOpen, setModalOpen] = useState(false)
    const [data, setData] = useState([])
    const [isFetched, setFetched] = useState(false)

    const handleModalOpen = useCallback(() => {
        setModalOpen(!isModalOpen)
    }, [isModalOpen])

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token')
            const result = await axios.get(
                APP_URL.concat('/user'),
                { headers: { "Authorization": `Bearer ${token}` } })

            setData(result.data.data)
        }
        fetchData().then(() => {
            setFetched(true)
        })
    }, [])

    const columns = useMemo(() => [
        {
            Header: 'ID',
            accessor: 'id'
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
                    {row.original.role_id == 2 ? "Restaurant" : "Customer"}
                </div>
            )
        },
        {
            Header: 'Option',
            id: 'option',
            accessor: 'id',
            Cell: ({ row }) => (
                <div>
                    <Link to="/admin/user/edit/" className="btn btn-warning"><i className="fa fa-edit"></i></Link>{" "}
                    <Link to="#" onClick={handleModalOpen} className="btn btn-danger" > <i className="fa fa-trash"></i> </Link >
                </div>
            ),
        }
    ], [handleModalOpen])

    return (
        <div>
            <Modal isOpen={isModalOpen} isToggled={handleModalOpen} title="Delete User" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Link to="/admin/user/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            {isFetched && <Table columns={columns} data={data} sortable fillterable />}
        </div>
    )

}

export default UserIndex