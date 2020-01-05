import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { APP_URL, USER_TOKEN } from '../../helper/config';
import axios from 'axios';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Content/Table';

const RestaurantIndex = (props) => {

    const [isModalOpen, setModalOpen] = useState(false)
    const [data, setData] = useState([])
    const [isFetched, setFetched] = useState(false)
    const [restId, setRestId] = useState(null)

    const [visible, setVisible] = useState(false)
    const [status, setStatus] = useState(false)
    const [message, setMessage] = useState('')

    const onDismiss = () => setVisible(false)

    const handleModalClose = useCallback(() => {
        setModalOpen(!isModalOpen)
    }, [isModalOpen])

    const handleDeleteModalOpen = useCallback((id) => {
        setModalOpen(!isModalOpen)
        setRestId(id)
    }, [isModalOpen])

    const handleTriggerAction = async () => {
        setFetched(false)
        await axios.delete(APP_URL.concat('/restaurant/' + restId), USER_TOKEN).then((result) => {
            if (result.data.success === true) {
                setModalOpen(!isModalOpen)
                setStatus(true)
                setVisible(true)
                setMessage(result.data.message)
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                APP_URL.concat('/restaurant'),
                USER_TOKEN
            )

            return result
        }
        fetchData().then(async (result) => {
            const data = result.data.data.requests
            for (var i = 0; i < data.length; i++) {
                await axios.get(APP_URL.concat('/user/' + data[i].user_id), USER_TOKEN).then((res) => {
                    data[i].owner = res.data.data[0].name
                })
            }
            setData(result.data.data.requests)
            setFetched(true)
        })
    }, [isFetched])

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
            Header: 'Owner',
            accessor: 'owner',
            Cell: ({ row }) => (
                <div>
                    {row.original.owner}
                </div>
            )
        },
        {
            Header: 'Option',
            id: 'option',
            accessor: 'id',
            Cell: ({ row }) => (
                <div>
                    <Link to={"/admin/restaurant/edit/" + row.original.id} className="btn btn-warning"><i className="fa fa-edit"></i></Link>{" "}
                    <Link to="#" className="btn btn-danger" onClick={() => handleDeleteModalOpen(row.original.id)} > <i className="fa fa-trash"></i> </Link >
                </div>
            ),
        }
    ], [])

    return (
        <div>
            <Alert color={status === true ? "success" : "danger"} className="mt-3 mb-3" isOpen={visible} toggle={onDismiss}>
                {message}
            </Alert>
            <Modal isOpen={isModalOpen} triggerAction={handleTriggerAction} triggerCancel={handleModalClose} title="Delete Restaurant" isType="delete">
                This action cannot be undone. Continue?
            </Modal>
            <Link to="/admin/restaurant/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            {isFetched && <Table columns={columns} data={data} sortable fillterable />}
        </div>
    )

}

export default RestaurantIndex