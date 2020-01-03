import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderComponent from '../components/Header/HeaderComponent';
import SidebarComponent from '../components/Sidebar/SidebarComponent';
import PageTitle from '../components/Content/PageTitle';
import '../assets/css/style.css';

import mainRoutes from '../routes/mainRoutes';

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

function AdminLayout(props) {

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
                )
            } else {
                return null;
            }
        });
    };

    const getBrandText = path => {
        for (let i = 0; i < mainRoutes.length; i++) {
            if (
                props.location.pathname.indexOf(
                    mainRoutes[i].layout + mainRoutes[i].path
                ) !== -1
            ) {
                return mainRoutes[i].name;
            }
        }
        return "Brand";
    };

    return (
        <div className="wrapper">

            <AdminContext.Provider value={{ state, dispatch }} >
                <SidebarComponent
                    {...props}
                    routes={mainRoutes}
                    activeState={getBrandText(props.location.pathname)} />

                <div id="content">

                    <HeaderComponent />
                    <PageTitle title={getBrandText(props.location.pathname)} />

                    <Switch>
                        {getRoutes(mainRoutes)}
                    </Switch>

                </div>
            </AdminContext.Provider>
        </div >
    )

}

export default AdminLayout