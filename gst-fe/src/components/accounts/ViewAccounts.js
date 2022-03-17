import React, { useEffect, useState, useContext} from 'react'
import './ManageAccounts.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import {API_BASE_URL} from "../../config/constant";
import { UserContext } from "../../App";

function ViewAccounts() {

  const { state, dispatch } = useContext(UserContext);
  const[accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);


  const getAllAccounts = () => {
      setLoading(true);
      const config = {
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    };

     
    //on load of view accounts fetch all gst accounts from API for this CA
    axios.get(`${API_BASE_URL}/api/gst/accounts/${state.userData.id}?pageNo=0&pageSize=50000`, config)
            .then((accounts)=>{
                //debugger;;
                console.log(accounts.data);
                setAccounts(accounts.data);
                setLoading(false)


            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
    
            })
  }
  
  useEffect(() => {
    getAllAccounts();
  }, []);

  /*useEffect(()=>{
    console.log(state);
    //on load of view accounts fetch all gst accounts from API for this CA
    axios.get(`${API_BASE_URL}/api/gst/accounts/${state.userData.id}?pageNo=0&pageSize=50000`, config)
            .then((accounts)=>{
                //debugger;
                setLoading(false);



            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
    
            })
  }, []);*/

  return (
    <div className='account-container mx-auto text-center p-3 mt-3'>
        <div className='row mb-2'>
            <div className='col-sm-6 col-md-2'>
                  <NavLink className="nav-link" to="/manage/view">View Accounts</NavLink>
            </div>
            <div className='col-sm-6 col-md-2'>
                  <NavLink className="nav-link" to="/manage">Add Accounts</NavLink>
            </div>
        </div>
        <div className="card">
            {loading? <div className="d-flex m-5 spinner-border text-primary mx-auto" role="status">
                            <span className="visually-hidden">Loading...</span>
            </div> : <div className="card-body table-responsive">
              <h4>All your GST Accounts</h4>
              <hr />
              <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Contact Name</th>
                                <th>Firm Name</th>
                                <th>GST Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                accounts.map((account, index) => (
                                    <tr key={index}>
                                        {/* <td>{index + 1}</td> */}
                                        <td>{account.contactPerson}</td>
                                        <td>{account.firmName}</td>
                                        <td>
                                          <Link to={`/manage/view/${account.id}`}>{account.gstNo}</Link>
                                          
                                        </td>
                                        {/* <td>
                                            <Link to={`/users/view/${account.id}`} className="btn btn-info me-2">View</Link>
                                            <Link to={`/users/edit/${account.id}`} className="btn btn-outline-info me-2">Edit</Link>
                                            <Button onClick={() => deleteUser(account.id)} variant="danger">Delete</Button>
                                        </td> */}
                                    </tr>
                                ))

                                /*
                                users.map((user, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                })
                                */
                            }

                        </tbody>
                    </table>
            </div> }
        </div>
    </div>
  )
}

export default ViewAccounts