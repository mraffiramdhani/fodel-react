// Initialize React
import React, { useState, useEffect, useContext } from 'react';
// import necessary Reactstrap component
import { NavLink } from 'react-router-dom';
// Import Shared Context from AdminLayout
import { AdminContext } from '../../layouts/Admin';

function SidebarComponent(props) {

    // Extract 'state' from Shared AdminLayout Context
    const { state } = useContext(AdminContext)
    const [activeMenu, setActiveMenu] = useState("Dashboard")

    useEffect(() => {
        setActiveMenu(props.activeState)
    }, [props.activeState])

    const createLinks = () => {
        return props.routes.map((prop, key) => {
            if (prop.isMenu) {
                return (
                    <li key={key} className={activeMenu === prop.name ? "active" : ""}>
                        <NavLink to={prop.layout + prop.path} onClick={() => setActiveMenu(prop.name)}><i className={prop.icon}></i> {prop.menuName}</NavLink>
                    </li>
                )
            } else {
                return null
            }
        })
    }

    return (
        <nav id="sidebar" className={state.activeStatus}>
            <div className="sidebar-header">
                <img width="40" height="40" alt="fodel-react" src={require("../../assets/images/fodel-logo.png")} />
                <h3>Fodel React</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Navigation Menu</p>
                {createLinks()}
            </ul>
        </nav>
    );
}

export default SidebarComponent