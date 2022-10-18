import { SET_USER_DATA, TOGGLE_AUTH_STATUS } from '../actions/auth-action'

//Messages export Action Creator
export const setUserData = (userId) => ({ type: SET_USER_DATA, userId })
export const toggleAuthStatus = (authStatus) => ({ type: TOGGLE_AUTH_STATUS, authStatus })