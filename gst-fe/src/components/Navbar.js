import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    const logout = ()=>{
        navigate("/login");


    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">GST Tool</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/filing">Filing</NavLink>
                        <NavLink className="nav-link" to="/sales">Sales</NavLink>
                        <NavLink className="nav-link" to="/purchase">Purchase</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        
                    </div>
                </div>
                <div className="navbar-nav d-md-flex justify-content-md-end">
                    <NavLink className="nav-link" to="/manageuser">Manage</NavLink>
                    <NavLink className="nav-link" to="/adduser">Add User</NavLink>
                    <button onClick={()=>{logout()}} type="button" className="btn btn-danger">Logout</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;