import {ThunkType} from "../redux-store"
import {FormAction, reset} from "redux-form"
import {authACs, AuthActionsType} from "../actionCreators/auth-action-creator";
import {profileACs, ProfileActionsType} from "../actionCreators/profile-action-creator";
import {profileAPI} from "../../API/profile-API";
import {UpdateProfileDataType} from "../../types/forms";

type Thunk = ThunkType<ProfileActionsType | AuthActionsType | FormAction>


export const getProfile = (userId: number, myId: number): Thunk =>
    async (dispatch) => {
        dispatch(profileACs.toggleFetchStatus(true))
        let {profileData} = await profileAPI.getProfileAPI(userId)
        dispatch(profileACs.setUserProfile(profileData))

        if (profileData.userId === myId) {
            dispatch(authACs.setUserPhoto(profileData.avatar))
        }
    }

export const updateProfile = (incData: UpdateProfileDataType): Thunk => async (dispatch) => {
    let {err} = await profileAPI.updateProfileAPI(incData)
    if (!err) {
        dispatch(profileACs.updateProfileData(incData))
    }
}
export const addProfilePost = (incPostData: string, formName: 'profileAddNewPost'): Thunk => async (dispatch) => {
    let {err, newPost} = await profileAPI.addPostAPI(incPostData)
    if (!err) {
        dispatch(profileACs.addPost(newPost))
        dispatch(reset(formName))
    }
}

export const deleteProfilePost = (incPostId: number): Thunk => async (dispatch) => {
    let {err, postId} = await profileAPI.deletePostAPI(incPostId)
    if (!err) {
        dispatch(profileACs.deletePost(postId, !err))
    }
}