import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_OBJ, GET_USER_REQUEST, MAKE_REQUEST, UPDATE_USER } from "./ActionType"

const initialState = {
    loading: true,
    userlist: [],
    userObj: {},
    errmessage: ''
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_REQUEST: return {
            ...state,
            loading: true
        }

        case FAIL_REQUEST: return {
            ...state,
            loading: false,
            errmessage: action.payload
        }

        case GET_USER_REQUEST: return {
            loading:false,
            errmessage:'',
            userlist:action.payload,
            userObj:{}
        }

        case DELETE_USER: return {
            ...state,
            loading:false
        }

        case ADD_USER: return {
            ...state,
            loading:false
        }

        case UPDATE_USER: return {
            ...state,
            loading:false
        }

        case GET_USER_OBJ: return {
            ...state,
            loading:false,
            userObj:action.payload
        }

        default: return state
    }
}