import {FormAction, stopSubmit} from "redux-form"
import {authAPI} from "../../API/api"
import {setUserId, toggleAuthStatus} from "../actionCreators/auth-action-creator"
import {setUserProfile, SetUserProfileActionType} from "../actionCreators/profile-action-creator"
import {AuthReducerActionType, LoginDataType, RegisterDataType} from "../../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AuthReducerActionType | SetUserProfileActionType | FormAction>


export const logIn = (authData: LoginDataType): ThunkType => async (dispatch) => {
    const {err, userId, message} = await authAPI.loginAPI(authData)
    if (!err) {
        dispatch(toggleAuthStatus(true))
        dispatch(setUserId(userId))
    } else {
        dispatch(stopSubmit('authLogin', {_error: message}))
    }
}


export const register = (authData: RegisterDataType): ThunkType => async (dispatch) => {
    let {message} = await authAPI.registerAPI(authData)
    dispatch(stopSubmit('authRegister', {_error: message}))
}

export const logOut = (): ThunkType => async (dispatch) => {
    let {err} = await authAPI.logoutAPI()
    if (!err) {
        dispatch(toggleAuthStatus(false))
        dispatch(setUserId(0))
        dispatch(setUserProfile(
            {userId: 0, email: '', firstName: '', lastName: '', birth: '', location: '', education: '', site: '', avatar: '', wallpaper: '', followed: [], postsData: [], isFetching: false}
        ))
    }
}
