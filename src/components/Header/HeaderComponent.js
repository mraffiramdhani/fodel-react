import React, { useState } from 'react';
// import { string } from 'prop-types';
// import { Row } from 'simple-flexbox';
// import { StyleSheet, css } from 'aphrodite';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import IconSearch from '../../assets/icon-search';
// import IconBellNew from '../../assets/icon-bell-new';

// const styles = StyleSheet.create({
//     avatar: {
//         height: 35,
//         width: 35,
//         borderRadius: 50,
//         marginLeft: 14,
//         border: '1px solid #DFE0EB',
//     },
//     container: {
//         height: 40
//     },
//     cursorPointer: {
//         cursor: 'pointer'
//     },
//     name: {
//         fontFamily: 'Montserrat',
//         fontStyle: 'normal',
//         fontWeight: 600,
//         fontSize: 14,
//         lineHeight: '20px',
//         textAlign: 'right',
//         letterSpacing: 0.2,
//         '@media (max-width: 768px)': {
//             display: 'none'
//         }
//     },
//     separator: {
//         borderLeft: '1px solid #DFE0EB',
//         marginLeft: 32,
//         marginRight: 32,
//         height: 32,
//         width: 2,
//         '@media (max-width: 768px)': {
//             marginLeft: 12,
//             marginRight: 12
//         }
//     },
//     title: {
//         fontFamily: 'Montserrat',
//         fontStyle: 'normal',
//         fontWeight: 'bold',
//         fontSize: 24,
//         lineHeight: '30px',
//         letterSpacing: 0.3,
//         '@media (max-width: 768px)': {
//             marginLeft: 36
//         },
//         '@media (max-width: 468px)': {
//             fontSize: 20
//         }
//     },
//     iconStyles: {
//         cursor: 'pointer',
//         marginLeft: 25,
//         '@media (max-width: 768px)': {
//             marginLeft: 12
//         }
//     }
// });

function HeaderComponent(props) {
    // const { icon, title, ...otherProps } = props;
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button type="button" id="sidebarCollapse" onClick={this.toogleSidebar} className={isActive + " navbar-btn"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-align-justify"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        {/* <li className="nav-item active">
                                        <a className="nav-link" href="#">Page</a>
                                    </li> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="#">John Doe</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <Row className={css(styles.container)} vertical="center" horizontal="space-between" {...otherProps}>
        //     <span className={css(styles.title)}>{title}</span>
        //     <Row vertical="center">
        //         <div className={css(styles.iconStyles)}>
        //             <IconSearch />
        //         </div>
        //         <div className={css(styles.iconStyles)}>
        //             <IconBellNew />
        //         </div>
        //         <div className={css(styles.separator)}></div>
        //         <Row vertical="center">
        //             <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        //                 <DropdownToggle
        //                     tag="div"
        //                     data-toggle="dropdown"
        //                     aria-expanded={dropdownOpen}>
        //                     <span className={css(styles.name, styles.cursorPointer)}>Germán Llorente</span>
        //                     <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className={css(styles.avatar, styles.cursorPointer)} />
        //                 </DropdownToggle>
        //                 <DropdownMenu>
        //                     <DropdownItem header>Header</DropdownItem>
        //                     <DropdownItem disabled>Action</DropdownItem>
        //                     <DropdownItem>Another Action</DropdownItem>
        //                     <DropdownItem divider />
        //                     <DropdownItem>Another Action</DropdownItem>
        //                 </DropdownMenu>
        //             </Dropdown>
        //         </Row>
        //     </Row>
        // </Row>
    );
}

// HeaderComponent.propTypes = {
//     title: string
// };

export default HeaderComponent