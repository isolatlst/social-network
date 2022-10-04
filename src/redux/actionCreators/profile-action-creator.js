import { ADD_POST, UPDATE_NEW_POST_TEXT, SET_USER_PROFILE, TOGGLE_FETCHING_STATUS } from '../actions/profile-action'

//Profile export Action Creator
export const addNewPost = (postText) => ({ type: ADD_POST, postText })
export const updateNewPost = (postText) => ({ type: UPDATE_NEW_POST_TEXT, postText })
export const setUserProfile = (data) => ({ type: SET_USER_PROFILE, data })
export const toggleFetchStatus = (isFetching) => ({ type: TOGGLE_FETCHING_STATUS, isFetching })