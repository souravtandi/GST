import React from 'react'

function ManageUser() {
  return (
    <div className='container'>
        <div className='col-12'>
            <h3 className='mt-5 text-center'>Manage User</h3>
        </div>
        <div className='col-12'>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Sl. No.</th>
                <th scope="col">GST No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>GST456</td>
                <td>John Doe</td>
                <td>john@gmail.com</td>
                <td>4566789521</td>
                <td>
                    <a to="#" className='btn btn-success'>Edit</a>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>GST785</td>
                <td>Peter Parker</td>
                <td>peter@gmail.com</td>
                <td>4587896325</td>
                <td>
                    <a to="#" className='btn btn-success'>Edit</a>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>GST858</td>
                <td>Mark Rols</td>
                <td>mark@gmail.com</td>
                <td>4578123658</td>
                <td>
                    <a to="#" className='btn btn-success'>Edit</a>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageUser