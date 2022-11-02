import {InitialStateType as ProfileInitialStateType} from "../redux/reducers/profile-reducer";
import {AxiosResponse} from "axios";
import {PostType, UserType} from "./state-types";

//Response Types
enum ResponseErrCode {
    false = 'RequestIsSuccess',
    true = 'RequestIsFailed'
}

export type CommonResponseType = AxiosResponse<{
    err: boolean | ResponseErrCode
    message?: string
}>


//---Users API Response Types
export type GetUsersAPIType = AxiosResponse<{
    usersData: Array<UserType>
    pagesCount: number
    pagesSize: number
    totalPage: number
}>
export type ToggleFollowAPIType = AxiosResponse<{
    status: boolean
}> & CommonResponseType


//---Auth API Response Type
export type LoginAPIType = AxiosResponse<{
    userId: number
}> & CommonResponseType
export type RegisterAPIType = CommonResponseType
export type LogoutAPIType = CommonResponseType


//---Profile API Response Type
export type GetProfileAPIType = AxiosResponse<{
    profileData: ProfileInitialStateType
}>
export type UpdateProfileAPIType = CommonResponseType
export type AddPostAPIType = AxiosResponse<{
    newPost: PostType
}> & CommonResponseType
export type DeletePostAPIType = AxiosResponse<{
    postId: number
}> & CommonResponseType