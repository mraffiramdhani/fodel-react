import React, { useState } from 'react';
import UserTable from '../../components/Content/UserTable';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

const UserIndex = () => {

    const [isModalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
        setModalOpen(!isModalOpen)
    }

    return (
        <div>
            <Modal isOpen={isModalOpen} isToggled={handleModalOpen} title="Delete User" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Link to="/admin/user/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            <UserTable openModal={handleModalOpen} />
        </div>
    )

}

export default UserIndex