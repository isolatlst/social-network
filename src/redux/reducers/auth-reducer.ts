import {AuthActionsType} from "../actionCreators/auth-action-creator";

type InitialStateType = typeof initialState
let initialState = {  //тест
    userId: 0,
    avatar: '',
    authStatus: false
}


const authReducer = (state = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA': {
            return {
                ...state,
                userId: action.userId
            }
        }
        case  'AUTH/TOGGLE_AUTH_STATUS': {
            return {
                ...state,
                authStatus: action.authStatus
            }
        }
        case 'AUTH/SET_USER_PHOTO': {
            return {
                ...state,
                avatar: action.avatar
            }
        }

        default:
            return state
    }
}


export default authReducer