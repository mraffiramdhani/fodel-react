import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderComponent from '../components/Header/HeaderComponent';
import SidebarComponent from '../components/Sidebar/SidebarComponent';
import PageTitle from '../components/Content/PageTitle';

import Index from '../pages/admin/Index';
import UserIndex from '../pages/users/Index';

import '../assets/css/style.css';

function AdminLayout(props) {

    const [isSidebarActive, setSidebarActive] = useState("")

    const handleSidebarActive = () => {
        setSidebarActive(isSidebarActive === "" ? "active" : "")
    }

    return (
        <div className="wrapper">

            <SidebarComponent isActive={isSidebarActive} {...props} />

            <div id="content">

                <HeaderComponent activateSidebar={handleSidebarActive} isActive={isSidebarActive} />

                <Switch>
                    <Route exact path="/admin/index" render={props => <Index {...props} />} />
                    <Route exact path="/admin/user/index" render={props => <UserIndex {...props} />} />
                </Switch>

            </div>
        </div >
    )

}

export default AdminLayout