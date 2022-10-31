import {profileAPI} from "../../API/api"
import {addPost, deletePost, setUserProfile, toggleFetchStatus, updateProfileData} from "../actionCreators/profile-action-creator"
import {setUserPhoto, SetUserPhotoActionType} from "../actionCreators/auth-action-creator"
import {ThunkAction} from "redux-thunk"
import {AppStateType} from "../redux-store"
import {ProfileReducerActionType} from "../../types/types"
import {reset} from "redux-form"

type UpdateProfileType = {
    avatar: string
    birth: string
    location: string
    education: string
    site: string
}
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ProfileReducerActionType | SetUserPhotoActionType>


export const getProfile = (userId: number, myId: number): ThunkType =>
    async (dispatch) => {
        dispatch(toggleFetchStatus(true))
        let {profileData} = await profileAPI.getProfileAPI(userId)
        dispatch(setUserProfile(profileData))

        if (profileData.userId === myId) {
            dispatch(setUserPhoto(profileData.avatar))
        }
    }

export const updateProfile = (incData: UpdateProfileType): ThunkType => async (dispatch) => {
    let {err} = await profileAPI.updateProfileAPI(incData)
    if (!err) {
        dispatch(updateProfileData(incData))
    }
}
export const addProfilePost = (incPostData: string, formName: 'profileAddNewPost'): ThunkType => async (dispatch) => {
    let {err, newPost} = await profileAPI.addPostAPI(incPostData)
    if (!err) {
        dispatch(addPost(newPost))
        // @ts-ignore
        dispatch(reset(formName))
    }
}

export const deleteProfilePost = (incPostId: number): ThunkType => async (dispatch) => {
    let {err, postId} = await profileAPI.deletePostAPI(incPostId)
    if (!err) {
        dispatch(deletePost(postId, !err))
    }
}