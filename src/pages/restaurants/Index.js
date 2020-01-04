import React, { useState, useMemo } from 'react';
// import RestaurantTable from '../../components/Content/RestaurantTable';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Content/Table';
import DummyRestaurant from '../../data/restaurant';

const RestaurantIndex = () => {

    const [isModalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
        setModalOpen(!isModalOpen)
    }

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
            Header: 'Logo',
            accessor: 'logo',
            Cell: ({ row }) => (
                <div>
                    <img alt={row.original.name} src={row.original.logo} width="40" height="40" />
                </div>
            )
        },
        {
            Header: 'Location',
            accessor: 'longitude',
            Cell: ({ row }) => (
                <span>Long: {row.original.longitude} | Lat: {row.original.latitude}</span>
            )
        },
        {
            Header: 'Description',
            accessor: 'description'
        },
        {
            Header: 'Option',
            id: 'option',
            accessor: 'id',
            Cell: ({ row }) => (
                <div>
                    <Link to="/admin/restaurant/edit/" className="btn btn-warning"><i className="fa fa-edit"></i></Link>{" "}
                    <Link to="#" className="btn btn-danger" onClick={handleModalOpen} > <i className="fa fa-trash"></i> </Link >
                </div>
            ),
        }
    ], [])

    return (
        <div>
            <Modal isOpen={isModalOpen} isToggled={handleModalOpen} title="Delete Restaurant" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Link to="/admin/restaurant/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            <Table columns={columns} data={DummyRestaurant.requests} />
        </div>
    )

}

export default RestaurantIndex