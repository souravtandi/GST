import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    const logout = ()=>{
        navigate("/login");


    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">GST Tool</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/filing">Filing</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/sales">Sales</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/purchase">Purchase</NavLink>
                    </li>
                </ul>
                    <form className="navbar-nav nav-item d-flex">
                        <NavLink className="nav-link" to="/manageuser">Manage</NavLink>
                        <NavLink className="nav-link" to="/adduser">AddUser</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        <a onClick={()=>{logout()}} type="button" className="btn btn-danger">Logout</a>
                   </form>
                </div>
            </div>
        </nav>
        
    );
}

export default NavBar;