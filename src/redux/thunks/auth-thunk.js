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
	let { err, userId, message } = await authAPI.loginAPI(authData)
	err ? dispatch(toggleAuthStatus(false)) : dispatch(toggleAuthStatus(true))
	dispatch(setUserData(userId))
	dispatch(stopSubmit('authLogin', { _error: message }))
}


export const register = (authData) => async (dispatch) => {
	let { message } = await authAPI.registerAPI(authData)
	dispatch(stopSubmit('authRegister', { _error: message }))
}

export const logOut = () => async (dispatch) => {
	let { err } = await authAPI.logoutAPI()
	if (!err) {
		dispatch(toggleAuthStatus(false))
		dispatch(setUserData(0))
		dispatch(setUserProfile({ userId: 0, email: '', firstName: '', lastName: '', name: '', birth: '', location: '', education: '', site: '', avatar: '', wallpaper: '', postsData: [], }))
	}
}
