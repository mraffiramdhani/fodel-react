import React, { useState } from 'react';
import RestaurantTable from '../../components/Content/RestaurantTable';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

const RestaurantIndex = () => {

    const [isModalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
        setModalOpen(!isModalOpen)
    }

    return (
        <div>
            <Modal isOpen={isModalOpen} isToggled={handleModalOpen} title="Delete Restaurant" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Link to="/admin/restaurant/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            <RestaurantTable openModal={handleModalOpen} />
        </div>
    )

}

export default RestaurantIndex