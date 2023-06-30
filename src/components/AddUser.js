import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { functionAddUser } from '../redux/Action';

function AddUser() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('staff');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handelSubmit = (e) =>{
        e.preventDefault();
        const userObj = { name, email, phone, role }
        dispatch(functionAddUser(userObj))
        navigate('/user')
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <form onSubmit={handelSubmit}>
                            <div className="card mt-5">
                                <div className="card-header d-flex">
                                    <h2 className="p-2 flex-grow-1">Add New User</h2>
                                </div>
                                <div className="card-body">
                                    <div  className="mb-3">
                                        <label  className="form-label">Name</label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}  className="form-control" placeholder="Enter Name" />
                                    </div>
                                    <div  className="mb-3">
                                        <label  className="form-label">Email Id</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control" placeholder="Enter Email" />
                                    </div>
                                    <div  className="mb-3">
                                        <label  className="form-label">Phone Number</label>
                                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)}  className="form-control" placeholder="Enter Phone Number" />
                                    </div>
                                    <div  className="mb-3">
                                        <label  className="form-label">Role</label>
                                        <select  className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                                            <option value="admin">Admin</option>
                                            <option value="staff">Staff</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-md btn-primary" style={{ marginRight: "10px" }}>Submit</button>
                                    <Link to={'/user'} className="btn btn-md btn-secondary">Go Back</Link>
                                </div>
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser
