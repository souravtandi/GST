import React from 'react'
import './ManageAccounts.css'
import { NavLink, useNavigate } from "react-router-dom";

function ManageAccounts() {
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
            <div className="card-body">
              <h4 className='p-3'>Add Account</h4>
              <form>
                <div className='row'>
                    <div className='col-sm-6 mb-3'>
                      <input placeholder='Firm Name' type="text" className="form-control" />
                    </div>
                    <div className='col-sm-6 mb-3'>
                      <input placeholder='Contact Person Name' type="text" className="form-control" />
                    </div>
                    <div className='col-sm-6 mb-3'>
                      <input placeholder='Proprietor Name' type="text" className="form-control" />
                    </div>
                    <div className='col-sm-6 mb-3'>
                      <input placeholder='GST Number' type="text" className="form-control" />
                    </div>
                    <div className='col-sm-6 mb-3'>
                      <input placeholder='Contact Number' type="text" className="form-control" />
                    </div>
                    <div className='col-sm-6 mb-3'>
                      <input placeholder='Contact Email' type="email" className="form-control" />
                    </div>
                    <div className='col-sm-6 mb-3'>
                      <input placeholder='GST Username' type="text" className="form-control" />
                    </div>
                    <div className='col-sm-6 mb-3'>
                      <input placeholder='GST Password' type="text" className="form-control" />
                    </div>
                    <div className='col-sm-12 mb-3 d-grid'>
                        <input type="submit" className='btn btn-primary' value="Submit" />
                    </div>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default ManageAccounts