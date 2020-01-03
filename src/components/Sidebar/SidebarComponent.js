import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

function SidebarComponent(props) {

    // const [activeMenu, setActiveMenu] = useState("Dashboard")

    useEffect(() => {
        console.log(props)
    }, [props])

    // const createLinks = () => {
    //     console.log(props)
    //     return props.routes.map((prop, key) => {
    //         if (prop.isMenu) {
    //             if (prop.layout === props.match.path) {
    //                 return (
    //                     <li key={key} className={activeMenu === prop.name ? "active" : ""}>
    //                         <NavLink to={prop.layout + prop.path} onClick={() => setActiveMenu(prop.name)}><i className={prop.icon}></i> {prop.menuName}</NavLink>
    //                     </li>
    //                 )
    //             } else {
    //                 return null
    //             }
    //         } else {
    //             return null
    //         }
    //     })
    // }

    return (
        <nav id="sidebar" className={props.isActive}>
            <div className="sidebar-header">
                <img width="35" height="35" alt="fodel-react" src={require("../../assets/images/fodel-logo.png")} />
                <h3>Fodel React</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Navigation Menu</p>
                <NavItem>
                    <NavLink to="/admin/index"><i className="fa fa-dashboard"></i> Dashboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/admin/user/index"><i className="fa fa-users"></i> Users</NavLink>
                </NavItem>
            </ul>
        </nav>
    );
}

export default SidebarComponent