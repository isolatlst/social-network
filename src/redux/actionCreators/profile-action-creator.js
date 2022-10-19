import { ADD_POST, DELETE_POST, SET_USER_PROFILE, TOGGLE_FETCHING_STATUS, UPDATE_PROFILE } from '../actions/profile-action'

//Profile export Action Creator
export const addNewPost = (postText) => ({ type: ADD_POST, postText })
export const setUserProfile = (data) => ({ type: SET_USER_PROFILE, data })
export const toggleFetchStatus = (isFetching) => ({ type: TOGGLE_FETCHING_STATUS, isFetching })
export const updateProfileData = (data, type) => ({ type: UPDATE_PROFILE, data, dataType: type })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })