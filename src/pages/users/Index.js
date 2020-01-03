import React from 'react';
import UserTable from '../../components/Content/UserTable';
import { Button } from 'reactstrap';

const UserIndex = () => {

    return (
        <div>
            <Button color="success" block><i class="fa fa-plus"></i> Add New</Button>
            <UserTable />
        </div>
    )

}

export default UserIndex