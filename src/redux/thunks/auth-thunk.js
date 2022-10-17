import { stopSubmit } from "redux-form"
import {
	authAPI
} from "../../API/api"
import {
	toggleAuthStatus, setUserData
} from "../actionCreators/auth-action-creator"
import {
	setUserProfile
} from "../actionCreators/profile-action-creator"


export const logIn = (authData) => async (dispatch) => {
	let response = await authAPI.loginAPI(authData)
	response.err ? dispatch(toggleAuthStatus(false)) : dispatch(toggleAuthStatus(true))
	dispatch(setUserData('userId', response.userId))
	dispatch(stopSubmit('authLogin', { _error: response.message }))
}


export const register = (authData) => async (dispatch) => {
	let response = await authAPI.registerAPI(authData)
	dispatch(stopSubmit('authRegister', { _error: response.message }))
}

export const logOut = () => async (dispatch) => {
	let response = await authAPI.logoutAPI()
	if (!response.err) {
		dispatch(toggleAuthStatus(false))
		dispatch(setUserData('userId', 0))
		dispatch(setUserProfile({ postsData: [] }))
	}
	// dispatch(stopSubmit('logout', { _error: response.message }))
}
