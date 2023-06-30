import React, { useEffect } from 'react'
import { fetchUserList, removeUser } from '../redux/Action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function UserListing(props) {

    useEffect(() => {
        props.loaduser();
    }, [])

    const handelClick=(id)=>{
        if(window.confirm("Do you want to remove?")){
            props.removeUser(id);
            props.loaduser();
            toast.success("User removed successfully.")
        }
    }

    return (

        props.user.loading ? <div><h2>Loading</h2></div> :
            props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :

                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-10">
                                <div className="card mt-5">
                                    <div className="card-header d-flex">
                                        <h2 className="p-2 flex-grow-1">User Listing</h2>
                                        <div className="p-2">
                                            <Link to={ '/user/add' } className="btn btn-lg btn-secondary" >Add User +</Link>
                                        </div>
                                        
                                    </div>
                                    <div className="card-body table-responsive">
                                        <table className="table table-bordered">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th scope="col">Code</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Role</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    props.user.userlist && props.user.userlist.map((item) => {
                                                        return (
                                                            <tr key={item.id}>
                                                                <th scope="row">{item.id}</th>
                                                                <td>{item.name}</td>
                                                                <td>{item.email}</td>
                                                                <td>{item.phone}</td>
                                                                <td>{item.role}</td>
                                                                <td className="text-center">
                                                                    <Link to={'/user/edit/' + item.id} className="btn btn-sm btn-primary mb-2" style={{ marginRight: "10px" }}>Edit </Link>
                                                                    <button onClick={()=>handelClick(item.id)} type="button" className="btn btn-sm btn-danger">Delete</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // in our Store.js all reducers are named intp user
        user: state.user
    }
}

// dispatching actions
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(fetchUserList()),
        removeUser:(id) => dispatch(removeUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListing)