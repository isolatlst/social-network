import { SET_USER_DATA, SET_USER_PHOTO, TOGGLE_AUTH_STATUS } from '../actions/auth-action'

let initialState = {  //тест
	userId: '',
	avatar: '',
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
		case SET_USER_PHOTO: {
			return {
				...state,
				avatar: action.userPhoto
			}
		}

		default: return state
	}
}


export default authReducer