import {authACs, AuthActionsType} from "../actionCreators/auth-action-creator"
import {FormAction, stopSubmit} from "redux-form"
import {ThunkType} from "../redux-store"
import {LoginDataType, RegisterDataType} from "../../types/forms"
import {profileACs, ProfileActionsType} from "../actionCreators/profile-action-creator";
import {authAPI} from "../../API/auth-API";


type Thunk = ThunkType<AuthActionsType | ProfileActionsType | FormAction>


export const logIn = (authData: LoginDataType): Thunk => async (dispatch) => {
    const {err, userId, message} = await authAPI.loginAPI(authData)
    if (!err) {
        dispatch(authACs.toggleAuthStatus(true))
        dispatch(authACs.setUserId(userId))
    } else {
        dispatch(stopSubmit('authLogin', {_error: message}))
    }
}


export const register = (authData: RegisterDataType): Thunk => async (dispatch) => {
    let {message} = await authAPI.registerAPI(authData)
    dispatch(stopSubmit('authRegister', {_error: message}))
}

export const logOut = (): Thunk => async (dispatch) => {
    let {err} = await authAPI.logoutAPI()
    if (!err) {
        dispatch(authACs.toggleAuthStatus(false))
        dispatch(authACs.setUserId(0))
        dispatch(profileACs.setUserProfile(
            {userId: 0, email: '', firstName: '', lastName: '', birth: '', location: '', education: '', site: '', avatar: '', wallpaper: '', followed: [], postsData: [], isFetching: false}
        ))
    }
}
