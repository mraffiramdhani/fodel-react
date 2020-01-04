import React, { useState } from 'react';
import CategoryTable from '../../components/Content/CategoryTable';
import { Link } from 'react-router-dom';
import DeleteModal from '../../components/Modal/DeleteModal';

const CategoryIndex = () => {

    const [isModalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
        setModalOpen(!isModalOpen)
    }

    return (
        <div>
            <DeleteModal isOpen={isModalOpen} isToggled={handleModalOpen} />
            <Link to="/admin/category/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            <CategoryTable openModal={handleModalOpen} />
        </div>
    )

}

export default CategoryIndex