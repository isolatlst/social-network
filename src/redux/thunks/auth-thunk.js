import { stopSubmit } from "redux-form"
import {
	authAPI
} from "../../API/api"
import {
	toggleAuthStatus, setUserId
} from "../actionCreators/auth-action-creator"
import {
	setUserProfile
} from "../actionCreators/profile-action-creator"


export const logIn = (authData) => async (dispatch) => {
	let { err, userId, message } = await authAPI.loginAPI(authData)
	if (!err) {
		dispatch(toggleAuthStatus(true))
		dispatch(setUserId(userId))
	} else {
		dispatch(stopSubmit('authLogin', { _error: message }))
	}
}


export const register = (authData) => async (dispatch) => {
	let { message } = await authAPI.registerAPI(authData)
	dispatch(stopSubmit('authRegister', { _error: message }))
}

export const logOut = () => async (dispatch) => {
	let { err } = await authAPI.logoutAPI()
	if (!err) {
		dispatch(toggleAuthStatus(false))
		dispatch(setUserId(0))
		dispatch(setUserProfile({ userId: 0, email: '', firstName: '', lastName: '', name: '', birth: '', location: '', education: '', site: '', avatar: '', wallpaper: '', postsData: [], }))
	}
}
