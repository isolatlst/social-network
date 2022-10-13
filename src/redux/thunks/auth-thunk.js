import {
	authAPI
} from "../../API/api"
import {
	toggleAuthStatus, setUserData
} from "../actionCreators/auth-action-creator"


export const logIn = (authData) => async (dispatch) => {
	let response = await authAPI.loginAPI(authData)
	response.err ? dispatch(toggleAuthStatus(false)) : dispatch(toggleAuthStatus(true))
	dispatch(setUserData('userId', response.userId))
	console.log(response)  //fixme
}


export const register = (authData) => async (dispatch) => {
	let response = await authAPI.registerAPI(authData)
	console.log(response)  //fixme
}

export const logOut = () => async (dispatch) => {
	let response = await authAPI.logoutAPI()
	if (!response.err) {
		dispatch(toggleAuthStatus(false))
		dispatch(setUserData('userId', 0))
	}
	console.log(response); //fixme
}
