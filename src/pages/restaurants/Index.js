import React, { useState } from 'react';
import RestaurantTable from '../../components/Content/RestaurantTable';
import { Link } from 'react-router-dom';
import DeleteModal from '../../components/Modal/DeleteModal';

const RestaurantIndex = () => {

    const [isModalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
        setModalOpen(!isModalOpen)
    }

    return (
        <div>
            <DeleteModal isOpen={isModalOpen} isToggled={handleModalOpen} />
            <Link to="/admin/restaurant/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            <RestaurantTable openModal={handleModalOpen} />
        </div>
    )

}

export default RestaurantIndex