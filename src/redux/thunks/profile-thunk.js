import { reset } from "redux-form"
import {
	profileAPI
} from "../../API/api"
import {
	toggleFetchStatus, setUserProfile, deletePost, addPost
} from "../actionCreators/profile-action-creator"
import {
	setUserPhoto
} from "../actionCreators/auth-action-creator"


export const getProfile = (userId, myId) => async (dispatch) => {
	dispatch(toggleFetchStatus(true))
	let { profileData } = await profileAPI.getProfileAPI(userId)
	dispatch(setUserProfile(profileData))

	if (profileData.userId === myId) {
		dispatch(setUserPhoto(profileData.avatar))
	}
}

export const updateProfile = (incData) => async (dispatch, getState) => {
	const userId = getState().auth.userId
	let { err } = await profileAPI.updateProfileAPI(incData)
	if (!err) {
		dispatch(getProfile(userId, userId))
	}
}
export const addProfilePost = (incPostData, formName) => async (dispatch) => {
	let { err, newPost } = await profileAPI.addPostAPI(incPostData)
	if (!err) {
		dispatch(addPost(newPost))
		dispatch(reset(formName))
	}
}

export const deleteProfilePost = (incPostId) => async (dispatch) => {
	let { err, postId } = await profileAPI.deletePostAPI(incPostId)
	if (!err) {
		dispatch(deletePost(postId, !err))
	}
}