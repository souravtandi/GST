import React from 'react'

function AddUser() {
  return (
    <div className='container'>
        <div className='col-12'>
            <h3 className='mt-5 text-center pb-2'>Add New User</h3>
        </div>
        <form>
            <div className="row mb-3 justify-content-center">
                <label for="gstnumber" className="col-sm-2 col-form-label">GST No.</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="gstnumber" />
                </div>
            </div>
            <div className="row mb-3 justify-content-center">
                <label for="fullname" className="col-sm-2 col-form-label">Full Name</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="fullname" />
                </div>
            </div>
            <div className="row mb-3 justify-content-center">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-5">
                    <input type="email" className="form-control" id="inputEmail3" />
                </div>
            </div>
            <div className="row mb-3 justify-content-center">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-5">
                    <input type="password" className="form-control" id="inputPassword3" />
                </div>
            </div>
            <div className="row mb-3 justify-content-center">
                <label for="phone" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-5">
                    <input type="number" className="form-control" id="phone" />
                </div>
            </div>
            <div className="d-grid col-4 mx-auto">
                <button className="btn btn-primary mb-2" type="button">Save User</button>
            </div>
            
        </form>
    </div>
  )
}

export default AddUser