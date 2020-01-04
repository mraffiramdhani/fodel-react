import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Content/Table';
import DummyUser from '../../data/user';

const UserIndex = () => {

    const [isModalOpen, setModalOpen] = useState(false)

    const handleModalOpen = useCallback(() => {
        setModalOpen(!isModalOpen)
    }, [isModalOpen])

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
            <Table columns={columns} data={DummyUser} sortable fillterable />
        </div>
    )

}

export default UserIndex