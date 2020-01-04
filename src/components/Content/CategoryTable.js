import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import DummyCategory from '../../data/category';

const CategoryTable = (props) => {

    const [data, setData] = useState(DummyCategory)
    const [isFetched, setIsFetched] = useState(true) // for test purposes (default: false)

    const handleOpenModal = e => {
        e.preventDefault()
        props.openModal()
    }

    // async componentDidMount() {
    //     const { data } = await axios.get('http://localhost:4040/user');
    //     this.setState({ data, isFetched: !this.state.isFetched })
    //     console.log(data)
    // }

    return (
        <Table striped className="mt-3 text-center" >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {isFetched && data.requests.map((value, key) => {
                    return (
                        <tr key={key}>
                            <th scope="row">{value.id}</th>
                            <td>{value.name}</td><td>
                                <Link to="/admin/category/edit" className="btn btn-warning"><i className="fa fa-edit"></i></Link> &nbsp;
                                <Link to="#" onClick={handleOpenModal} className="btn btn-danger"><i className="fa fa-trash"></i> </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    )
}

export default CategoryTable