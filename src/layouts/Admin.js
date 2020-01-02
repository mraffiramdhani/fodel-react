import React, { useState, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import HeaderComponent from '../components/Header/HeaderComponent';
import SidebarComponent from '../components/Sidebar/SidebarComponent';
import '../assets/css/style.css';

export const AdminContext = React.createContext();

const initialState = {

    activeStatus: "",

};

function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_ACTIVE_STATUS":
            return {
                activeStatus: action.data
            }

        default:
            return initialState
    }
}

function AdminLayout() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    return (
        <div className="wrapper">

            <AdminContext.Provider value={{ state, dispatch }} >
                <SidebarComponent />

                <div id="content">

                    <HeaderComponent />

                    {/* Content */}
                    <Switch>{getRoutes(routes)}</Switch>

                </div>
            </AdminContext.Provider>
        </div >
    )

}

export default AdminLayout