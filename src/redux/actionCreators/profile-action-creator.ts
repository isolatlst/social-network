import {ADD_POST, DELETE_POST, SET_USER_PROFILE, TOGGLE_FETCHING_STATUS, UPDATE_PROFILE} from '../actions/profile-action'
import {InitialStateType, PostType} from "../reducers/profile-reducer";


export type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: InitialStateType
}
export type ToggleFetchStatusActionType = {
    type: typeof TOGGLE_FETCHING_STATUS
    isFetching: boolean
}
export type AddPostActionType = {
    type: typeof ADD_POST
    newPost: PostType
}
export type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
    isDeleted: boolean
}
type UpdateProfileDataType = {
    avatar: string
    birth: string
    location: string
    education: string
    site: string
}
export type UpdateProfileDataActionType = {
    type: typeof UPDATE_PROFILE
    data: UpdateProfileDataType
}

//Profile export Action Creator
export const setUserProfile = (profile: InitialStateType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const toggleFetchStatus = (isFetching: boolean): ToggleFetchStatusActionType => ({type: TOGGLE_FETCHING_STATUS, isFetching})
export const addPost = (newPost: PostType): AddPostActionType => ({type: ADD_POST, newPost})
export const deletePost = (postId: number, isDeleted: boolean): DeletePostActionType => ({type: DELETE_POST, postId, isDeleted})
export const updateProfileData = (data: UpdateProfileDataType): UpdateProfileDataActionType => ({type: "PROFILE/UPDATE-PROFILE", data})