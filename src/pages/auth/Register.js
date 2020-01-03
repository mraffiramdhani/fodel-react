import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>Fodel React<br /> Register Page</h2>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" className="form-control" placeholder="Type your Full Name" />
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" name="username" className="form-control" placeholder="Type your Username" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" placeholder="Type a valid Password" />
                            </div>
                            <div className="form-group">
                                <label>Re-Type Password</label>
                                <input type="password" name="confirm_password" className="form-control" placeholder="Re-Type your Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                            <Link to="/admin/login" className="btn btn-secondary" > I Have an Account.</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage