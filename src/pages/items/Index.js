import React, { useState } from 'react';
import ItemTable from '../../components/Content/ItemTable';
import { Link } from 'react-router-dom';
import DeleteModal from '../../components/Modal/DeleteModal';

const ItemIndex = () => {

    const [isModalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
        setModalOpen(!isModalOpen)
    }

    return (
        <div>
            <DeleteModal isOpen={isModalOpen} isToggled={handleModalOpen} />
            <Link to="/admin/item/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            <ItemTable openModal={handleModalOpen} />
        </div>
    )
}

export default ItemIndex