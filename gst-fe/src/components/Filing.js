import React from 'react'
import { Link } from 'react-router-dom';

function Filing() {
  return (
      <div className='container mt-5 p-3'>
          <div className='row'>
              <div className='col-12 mb-3'>
                <label htmlFor="exampleFormControlInput1" className="form-label">GST Number</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter GST Number" />
              </div>
              <div className='col-lg-4 col-md-4 col-sm-6 mb-3'>
                  <div className='d-flex justify-content-around'>
                    <input type="date" className='form-control me-3' /><span>From Date</span>
                  </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-6 mb-3'>
                  <div className='d-flex justify-content-around'>
                    <input type="date" className='form-control me-3' /><span>To Date</span>
                  </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-6'>
                  <button className='btn btn-primary'>Search</button>
              </div>
          </div>
          <div className='row'>
            <div className='col-12'>
                  <h3 className='mt-5 text-center'>Filing Details</h3>
            </div>
              <div className='col-12'>
                <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Sl.No.</th>
                          <th scope="col">GST1B Date of Filing</th>
                          <th scope="col">GST3B Date of Filing</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>21/03/2021</td>
                          <td>09/05/2021</td>
                          <td>
                          <Link to="/filing/details/1" className='btn btn-success'>View</Link>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>21/03/2021</td>
                          <td>09/05/2021</td>
                          <td>
                          <Link to="/filing/details/2" className='btn btn-success'>View</Link>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>21/03/2021</td>
                          <td>09/05/2021</td>
                          <td>
                            <Link to="/filing/details/3" className='btn btn-success'>View</Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
              </div>
          </div>
      </div>
  )
}

export default Filing