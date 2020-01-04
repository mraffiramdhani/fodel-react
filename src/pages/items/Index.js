import React, { useState } from 'react';
import ItemTable from '../../components/Content/ItemTable';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

const ItemIndex = () => {

    const [isModalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
        setModalOpen(!isModalOpen)
    }

    return (
        <div>
            <Modal isOpen={isModalOpen} isToggled={handleModalOpen} title="Delete Item" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Link to="/restaurant/item/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            <ItemTable openModal={handleModalOpen} />
        </div>
    )
}

export default ItemIndex