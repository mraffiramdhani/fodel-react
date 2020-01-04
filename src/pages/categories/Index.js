import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryTable from '../../components/Content/CategoryTable';
import Modal from '../../components/Modal/Modal';

const CategoryIndex = () => {

    const [isModalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
        setModalOpen(!isModalOpen)
    }

    return (
        <div>
            <Modal isOpen={isModalOpen} isToggled={handleModalOpen} title="Delete Category" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Link to="/admin/category/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            <CategoryTable openModal={handleModalOpen} />
        </div>
    )

}

export default CategoryIndex