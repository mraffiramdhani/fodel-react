import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import { Column, Row } from 'simple-flexbox';
// import { StyleSheet, css } from 'aphrodite';
// import SidebarComponent from '../components/Sidebar/SidebarComponent';
// import HeaderComponent from '../components/Header/HeaderComponent';
// import ContentComponent from '../components/Content/ContentComponent';
import '../assets/css/style.css';

// const styles = StyleSheet.create({
//     container: {
//         display: 'flex',
//         flexDirection: 'row',
//         margin: 0,
//         height: '100%',
//         minHeight: '100vh'
//     },
//     content: {
//         marginTop: 54
//     },
//     mainBlock: {
//         backgroundColor: '#F2F2F2',
//         padding: 30
//     }
// });

// class AdminLayout extends Component {
//     state = { selectedItem: 'Overview' };

//     componentDidMount() {
//         window.addEventListener('resize', this.resize);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('resize', this.resize);
//     }

//     resize = () => this.forceUpdate();

//     render() {
//         const { selectedItem } = this.state;
//         return (
//             <Row className={css(styles.container)}>
//                 <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
//                 <Column flexGrow={1} className={css(styles.mainBlock)}>
//                     <HeaderComponent title={selectedItem} />
//                     <div className={css(styles.content)}>
//                         {/* <ContentComponent /> */}
//                     </div>
//                 </Column>
//             </Row>
//         );
//     }
// }

class AdminLayout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isActive: ""
        }
    }

    toogleSidebar = e => {
        e.preventDefault()
        this.setState({ isActive: this.state.isActive === "active" ? "" : "active" })
    }

    render() {
        const { isActive } = this.state
        return (
            <div className="wrapper">
                <nav id="sidebar" className={isActive}>
                    <div className="sidebar-header">
                        <img width="40" height="40" alt="fodel-react" src={require("../assets/images/fodel-logo.png")} />
                        <h3>Fodel React</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <p>NAVIGATION MENU</p>
                        <li className="active">
                            <a href="#"><i className="fa fa-dashboard"></i> Dashboard</a>
                        </li>
                        {/* <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li> */}
                    </ul>
                </nav>

                <div id="content">

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
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Page</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Page</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Page</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Page</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <h2>Collapsible Sidebar Using Bootstrap 4</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className="line"></div>

                    <h2>Lorem Ipsum Dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className="line"></div>

                    <h2>Lorem Ipsum Dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className="line"></div>

                    <h3>Lorem Ipsum Dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div >
        )
    }
}

export default AdminLayout