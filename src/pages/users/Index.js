import React from 'react';
import UserTable from '../../components/Content/UserTable';
import { Link } from 'react-router-dom';

const UserIndex = () => {

    return (
        <div>
            <Link to="/admin/user/create" className="btn btn-success btn-block mt-3"><i className="fa fa-plus"></i> Add New</Link>
            <UserTable />
        </div>
    )

}

export default UserIndex