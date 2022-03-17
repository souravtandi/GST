import React, {useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
    //if user has session than state will not be null else it will be null
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.clear();
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
    }

    const navigationMenu = () => {
        if (state) {//user is logged in
            return [
                <li key="101" className="nav-item">
                <NavLink className="nav-link" to="/filing">Filing</NavLink>
                </li>,
                <li key="102" className="nav-item">
                    <NavLink className="nav-link" to="/sales">Sales</NavLink>
                </li>,
                <li key="103" className="nav-item">
                    <NavLink className="nav-link" to="/purchase">Purchase</NavLink>
                </li>,
                <li key="106" className="nav-item">
                <NavLink className="nav-link" to="/manage/view">Manage</NavLink>
                </li>,
                <li key="104" className="nav-item">
                <a onClick={()=>{logout()}} type="button" className="btn btn-danger">Logout</a>
                </li>
            ]
        }else{
            return [
                <li key="105" className="nav-item">
                     <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
             ]
        }
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
                    {navigationMenu()}

                </ul>
                    
                </div>
            </div>
        </nav>
        
    );
}

export default NavBar;