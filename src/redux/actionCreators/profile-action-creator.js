import { ADD_POST, UPDATE_NEW_POST_TEXT } from '../actions/profile-action'

//Profile export Action Creator
export const addPostACreator = (text) => ({ type: ADD_POST, postText: text })
export const updateNewPostACreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, postText: text })