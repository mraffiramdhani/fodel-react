import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { APP_URL } from '../../helper/config';
import axios from 'axios';
import storage from '../../redux/store';

const { store } = storage()

const HeaderComponent = (props) => {
    const changeActiveStatus = () => {
        props.activateSidebar()
    }

    const handleLogout = async () => {
        const token = localStorage.getItem('token')
        await axios.get(APP_URL.concat('/logout'), { headers: { "Authorization": `Bearer ${token}` } }).then((result) => {
            props.history.push('/auth/login')
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button type="button" id="sidebarCollapse" onClick={changeActiveStatus} className={props.isActive + " navbar-btn"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-align-justify"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <UncontrolledDropdown className="ml-auto">
                        <DropdownToggle tag="span" id="user-name">
                            {store.getState().auth.data.name}
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={handleLogout}><i className="fa fa-sign-out"></i> Log Out</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent