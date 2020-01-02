import React, { useState, useContext } from 'react';
import { AdminContext } from '../../layouts/Admin';

function SidebarComponent() {

    const { state, dispatch } = useContext(AdminContext)

    return (
        <nav id="sidebar" className={state.activeStatus}>
            <div className="sidebar-header">
                <img width="40" height="40" alt="fodel-react" src={require("../../assets/images/fodel-logo.png")} />
                <h3>Fodel React</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Navigation Menu</p>
                <li className="active">
                    <a href="#"><i className="fa fa-dashboard"></i> Dashboard</a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-users"></i> User Management</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default SidebarComponent