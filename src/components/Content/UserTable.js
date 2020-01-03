import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DummyUser from '../../data/user';

class UserTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: DummyUser,
            isFetched: true // for test purposes (default: false)
        }
    }

    // async componentDidMount() {
    //     const { data } = await axios.get('http://localhost:4040/user');
    //     this.setState({ data, isFetched: !this.state.isFetched })
    //     console.log(data)
    // }

    render() {
        const { data, isFetched } = this.state
        return (
            <Table striped className="mt-3 text-center" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {isFetched && data.map((value, key) => {
                        return (
                            < tr key={key}>
                                <th scope="row">{value.id}</th>
                                <td>{value.name}</td>
                                <td>{value.username}</td>
                                <td>{value.role_id}</td>
                                <td>
                                    <Link to="/admin/user/edit" className="btn btn-warning"><i className="fa fa-edit"></i></Link> &nbsp;
                                    <Link to="#" className="btn btn-danger"><i className="fa fa-trash"></i> </Link>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table >
        )
    }
}

export default UserTable