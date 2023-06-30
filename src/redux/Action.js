import axios from "axios"
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_OBJ, GET_USER_REQUEST, MAKE_REQUEST, UPDATE_USER } from "./ActionType"
import { toast } from "react-toastify"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

export const getUserList = (data) => {
    return {
        type: GET_USER_REQUEST,
        payload: data
    }
}

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

export const addUser = ()=>{
    return {
        type:ADD_USER
    }
}

export const updateUser = ()=>{
    return {
        type:UPDATE_USER
    }
}

export const getUserObj = (data) => {
    return {
        type: GET_USER_OBJ,
        payload: data
    }
}



// dispatching a function for fetch user
export const fetchUserList = () => {
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get('http://localhost:8000/user').then(res=>{
            const userlist = res.data;
            dispatch(getUserList(userlist))
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}


// dispatching a function for remove user
export const removeUser = (id) => {
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.delete('http://localhost:8000/user/'+id).then(res=>{
            dispatch(deleteUser())
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

// dispatching a function for add user
export const functionAddUser = (data) => {
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.post('http://localhost:8000/user', data).then(res=>{
            dispatch(addUser())
            toast.success("User added successfully.")
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

// dispatching a function for edit user
export const functionUpdateUser = (data, id) => {
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.put('http://localhost:8000/user/'+id, data).then(res=>{
            dispatch(updateUser())
            toast.success("User updated successfully.")
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

// dispatching a function for getting an id
export const fetchUserObj = (id) => {
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get('http://localhost:8000/user/'+id).then(res=>{
            const userlist = res.data;
            dispatch(getUserObj(userlist))
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}
