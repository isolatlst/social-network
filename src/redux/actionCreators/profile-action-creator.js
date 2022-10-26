import { DELETE_POST, SET_USER_PROFILE, TOGGLE_FETCHING_STATUS, ADD_POST } from '../actions/profile-action'

//Profile export Action Creator
export const setUserProfile = (data) => ({ type: SET_USER_PROFILE, data })
export const toggleFetchStatus = (isFetching) => ({ type: TOGGLE_FETCHING_STATUS, isFetching })
export const addPost = (newPost) => ({ type: ADD_POST, newPost })
export const deletePost = (postId, isDeleted) => ({ type: DELETE_POST, postId, isDeleted })