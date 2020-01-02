import React, { useContext } from 'react';
import { AdminContext } from '../../layouts/Admin';

function SidebarComponent(props) {

    const { state } = useContext(AdminContext)

    const createLinks = () => {
        return props.routes.map((prop, key) => {
            return (
                <li key={key}>
                    <a href="#"><i className={prop.icon}></i> {prop.name}</a>
                </li>
            )
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