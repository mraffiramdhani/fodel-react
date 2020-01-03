// Initialize React
import React, { useReducer } from 'react';
// using react-router-dom 
import { Route, Switch } from 'react-router-dom';
// import necessary dashboard component
import HeaderComponent from '../components/Header/HeaderComponent';
import SidebarComponent from '../components/Sidebar/SidebarComponent';
import PageTitle from '../components/Content/PageTitle';
// dashboard stylesheet
import '../assets/css/style.css';

// main routes
import mainRoutes from '../routes/mainRoutes';

// Context
export const AdminContext = React.createContext();

// Contet initial value(s)
const initialState = {

    activeStatus: "",

};

// Initialize reducer function
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

// Main Admin Layout
function AdminLayout(props) {

    // useReducer
    const [state, dispatch] = useReducer(reducer, initialState)

    // Iterate any available route(s)
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

    // Extract Page Name based on route(s)
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

                    {/* Content */}
                    <Switch>
                        {getRoutes(mainRoutes)}
                    </Switch>

                </div>
            </AdminContext.Provider>
        </div >
    )

}

export default AdminLayout