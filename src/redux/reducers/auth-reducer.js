import { SET_USER_DATA, TOGGLE_AUTH_STATUS } from '../actions/auth-action'

// let initialState = { //ориг
// 	userId: '',
// 	firstName: '',
// 	lastName: '',
// 	email: '',
// 	password: '',
// 	confirmPassword: '',
// 	authStatus: false
// }
let initialState = {  //тест
	userId: '',
	firstName: '2',
	lastName: '2',
	email: '2',
	password: '2',
	confirmPassword: '2',
	authStatus: false
}


const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			state[action.key] = action.data
			return {
				...state
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