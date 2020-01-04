import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import DummyItem from '../../data/item';

const ItemTable = (props) => {

    const [data, setData] = useState(DummyItem)
    const [isFetched, setIsFetched] = useState(true) // for test purposes (default: false)

    const handleOpenModal = e => {
        e.preventDefault()
        props.openModal()
    }

    const Rupiah = (nominal, prefix) => {
        let number_string = nominal.toString(),
            split = number_string.split(','),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{3}/gi);

        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }
        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
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
                    <th>Price</th>
                    <th>Images</th>
                    <th>Restaurant</th>
                    <th>Rating</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {isFetched && data.requests.map((value, key) => {
                    return (
                        <tr key={key}>
                            <th scope="row">{value.id}</th>
                            <td>{value.name}</td>
                            <td>
                                {Rupiah(value.price, "Rp.")}
                            </td>
                            <td></td>
                            <td>{value.restaurant_id}</td>
                            <td>{value.rating}</td>
                            <td>
                                <Link to="/restaurant/item/edit" className="btn btn-warning"><i className="fa fa-edit"></i></Link> &nbsp;
                                <Link to="#" onClick={handleOpenModal} className="btn btn-danger"><i className="fa fa-trash"></i> </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    )
}

export default ItemTable