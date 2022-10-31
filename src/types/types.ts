import {SetUserIdActionType, SetUserPhotoActionType, ToggleAuthStatusActionType} from "../redux/actionCreators/auth-action-creator";
import {SendNewMessageActionType} from "../redux/actionCreators/messages-action-creator";
import {AddPostActionType, DeletePostActionType, SetUserProfileActionType, ToggleFetchStatusActionType as ToggleFetchStatusActionTypePr, UpdateProfileDataActionType} from "../redux/actionCreators/profile-action-creator";
import {ChangeTotalPageActionType, SetPagesCountActionType, SetPageSizeActionType, SetUsersActionType, ToggleFetchStatusActionType as ToggleFetchStatusActionTypeUs, ToggleFollowingStatusActionType, ToggleIsFollowingProgressActionType} from "../redux/actionCreators/users-action-creator";
import {UserType} from "../redux/reducers/users-reducer";
import {InitialStateType as ProfileInitialStateType, PostType} from "../redux/reducers/profile-reducer";
import {AxiosResponse} from "axios";


//Reducers
export type AuthReducerActionType = SetUserIdActionType | ToggleAuthStatusActionType | SetUserPhotoActionType
export type MessagesReducerActionType = SendNewMessageActionType
export type ProfileReducerActionType = SetUserProfileActionType | ToggleFetchStatusActionTypePr | AddPostActionType | DeletePostActionType | UpdateProfileDataActionType
export type UsersReducerActionType = SetUsersActionType | ToggleFollowingStatusActionType | ChangeTotalPageActionType | SetPagesCountActionType | SetPageSizeActionType | ToggleFetchStatusActionTypeUs | ToggleIsFollowingProgressActionType


//---Login Inc Data Type
export type LoginDataType = {
    email: string
    password: string
}
//---Register Inc Data Type
export type RegisterDataType = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}
//---Update Profile Inc Data Type
export type UpdateProfileDataType = {
    avatar?: string
    birth?: string
    education?: string
    location?: string
    site?: string
}


//Response Types
enum ResponseErrCode {
    false = 'RequestIsSuccess',
    true = 'RequestIsFailed'
}

export type CommonResponseType = AxiosResponse<{
    err: boolean | ResponseErrCode
    message: string
}>
//---Users API Types
export type GetUsersAPIType = AxiosResponse<{
    usersData: Array<UserType>
    pagesCount: number
    pagesSize: number
    totalPage: number
}>
export type ToggleFollowAPIType = AxiosResponse<{
    err: boolean
    status: boolean
}>
//---Auth API Type
export type LoginAPIType = AxiosResponse<{
    userId: number
}> & CommonResponseType
export type RegisterAPIType = CommonResponseType
export type LogoutAPIType = CommonResponseType
//---ProfileAPIType
export type GetProfileAPIType = AxiosResponse<{
    profileData: ProfileInitialStateType
}>
export type UpdateProfileAPIType = AxiosResponse<{
    err: boolean
}>
export type AddPostAPIType = AxiosResponse<{
    err: boolean
    newPost: PostType
}>
export type DeletePostAPIType = AxiosResponse<{
    err: boolean
    postId: number
}>