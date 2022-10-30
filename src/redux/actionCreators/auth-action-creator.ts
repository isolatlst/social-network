import {SET_USER_DATA, SET_USER_PHOTO, TOGGLE_AUTH_STATUS} from '../actions/auth-action'

type SetUserIdActionType = {
    type: typeof SET_USER_DATA
    userId: number
}
type ToggleAuthStatusActionType = {
    type: typeof TOGGLE_AUTH_STATUS
    authStatus: boolean
}
type SetUserPhotoActionType = {
    type: typeof SET_USER_PHOTO
    userPhoto: string
}
//Messages export Action Creator
export const setUserId = (userId: number): SetUserIdActionType => ({type: SET_USER_DATA, userId})
export const toggleAuthStatus = (authStatus: boolean): ToggleAuthStatusActionType => ({type: TOGGLE_AUTH_STATUS, authStatus})
export const setUserPhoto = (userPhoto: string): SetUserPhotoActionType => ({type: SET_USER_PHOTO, userPhoto})