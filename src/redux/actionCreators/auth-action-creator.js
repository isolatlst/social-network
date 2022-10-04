import { SET_USER_DATA, TOGGLE_AUTH_STATUS } from '../actions/auth-action'

//Messages export Action Creator
export const setUserData = (key, data) => ({ type: SET_USER_DATA, key, data })
export const toggleAuthStatus = (authStatus) => ({ type: TOGGLE_AUTH_STATUS, authStatus })