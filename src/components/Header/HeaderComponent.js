import React, { useState, useContext } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { AdminContext } from '../../layouts/Admin';

function HeaderComponent() {
    const { state, dispatch } = useContext(AdminContext)
    const changeActiveStatus = () => {
        var stat = state.activeStatus === "" ? "active" : ""
        dispatch({ type: 'UPDATE_ACTIVE_STATUS', data: stat })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button type="button" id="sidebarCollapse" onClick={() => changeActiveStatus()} className={state.activeStatus + " navbar-btn"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-align-justify"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        {/* <li className="nav-item active">
                                <a className="nav-link" href="#">Page</a>
                            </li> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="#">John Doe</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent