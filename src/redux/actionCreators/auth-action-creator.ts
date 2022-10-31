import {SET_USER_DATA, SET_USER_PHOTO, TOGGLE_AUTH_STATUS} from '../actions/auth-action'

export type SetUserIdActionType = {
    type: typeof SET_USER_DATA
    userId: number
}
export type ToggleAuthStatusActionType = {
    type: typeof TOGGLE_AUTH_STATUS
    authStatus: boolean
}
export type SetUserPhotoActionType = {
    type: typeof SET_USER_PHOTO
    avatar: string
}
//Messages export Action Creator
export const setUserId = (userId: number): SetUserIdActionType => ({type: SET_USER_DATA, userId})
export const toggleAuthStatus = (authStatus: boolean): ToggleAuthStatusActionType => ({type: TOGGLE_AUTH_STATUS, authStatus})
export const setUserPhoto = (avatar: string): SetUserPhotoActionType => ({type: SET_USER_PHOTO, avatar})