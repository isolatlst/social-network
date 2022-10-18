import { SET_USER_DATA, TOGGLE_AUTH_STATUS } from '../actions/auth-action'

let initialState = {  //тест
	userId: '',
	authStatus: false
}


const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				userId: action.userId
			}
		}
		case TOGGLE_AUTH_STATUS: {
			return {
				...state,
				authStatus: action.authStatus
			}
		}

		default: return state
	}
}


export default authReducer