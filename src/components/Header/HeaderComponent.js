// Initialize React
import React, { useContext } from 'react';
// Import necessary Reactstrap Component
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// Import Shared Context from AdminLayout
import { AdminContext } from '../../layouts/Admin';

const HeaderComponent = (props) => {

    // Extract 'state' and 'dispatch' from Shared AdminLayout Context
    const { state, dispatch } = useContext(AdminContext)

    // Function to change the 'activeStatus' value and fire the dispatch
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
                    <UncontrolledDropdown className="ml-auto" direction="left">
                        <DropdownToggle tag="span" id="user-name">
                            John Doe
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><i className="fa fa-sign-out"></i> Log Out</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent