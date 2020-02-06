import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderComponent from '../components/Header/HeaderComponent';
import SidebarComponent from '../components/Sidebar/SidebarComponent';
import PageTitle from '../components/Content/PageTitle';
import withAuth from '../middleware/withAuth';

import mainRoutes from '../routes/mainRoutes';

import '../assets/css/style.css';

const RestaurantLayout = (props) => {

    const [isSidebarActive, setSidebarActive] = useState("")

    useEffect(() => {
        document.body.style = "backgroun: #fafafa"
    }, [])

    const handleSidebarActive = () => {
        setSidebarActive(isSidebarActive === "" ? "active" : "")
    }

    const getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === '/restaurant') {
                var param = ''
                if (prop.params && prop.params.length > 0) param = prop.params.join('')
                return (
                    <Route
                        key={key}
                        path={prop.layout + prop.path + param}
                        exact
                        component={withAuth(prop.component, 'restaurant')}
                    />
                )
            } else {
                return null
            }
        })
    }

    const getBrandText = (path, routes) => {
        for (let i = 0; i < routes.length; i++) {
            if (
                props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    }

    return (
        <div className="wrapper">

            <SidebarComponent isActive={isSidebarActive} {...props} routes={mainRoutes} />

            <div id="content">

                <HeaderComponent {...props} activateSidebar={handleSidebarActive} isActive={isSidebarActive} />
                <PageTitle title={getBrandText(props.location.pathname, mainRoutes)} />

                <Switch>
                    {getRoutes(mainRoutes)}
                </Switch>

            </div>

        </div>
    )
}

export default RestaurantLayout