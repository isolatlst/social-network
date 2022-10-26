import { SET_USER_DATA, SET_USER_PHOTO, TOGGLE_AUTH_STATUS } from '../actions/auth-action'

//Messages export Action Creator
export const setUserId = (userId) => ({ type: SET_USER_DATA, userId })
export const toggleAuthStatus = (authStatus) => ({ type: TOGGLE_AUTH_STATUS, authStatus })
export const setUserPhoto = (userPhoto) => ({ type: SET_USER_PHOTO, userPhoto })