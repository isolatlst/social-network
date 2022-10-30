import {ADD_POST, DELETE_POST, SET_USER_PROFILE, TOGGLE_FETCHING_STATUS} from '../actions/profile-action'
import {InitialStateType, PostType} from "../reducers/profile-reducer";


type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    data: InitialStateType
}
type ToggleFetchStatusActionType = {
    type: typeof TOGGLE_FETCHING_STATUS
    isFetching: boolean
}
type AddPostActionType = {
    type: typeof ADD_POST
    newPost: PostType
}
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
    isDeleted: boolean
}
//Profile export Action Creator
export const setUserProfile = (data: InitialStateType) => ({type: SET_USER_PROFILE, data})
export const toggleFetchStatus = (isFetching: boolean) => ({type: TOGGLE_FETCHING_STATUS, isFetching})
export const addPost = (newPost: PostType) => ({type: ADD_POST, newPost})
export const deletePost = (postId: number, isDeleted: boolean) => ({type: DELETE_POST, postId, isDeleted})