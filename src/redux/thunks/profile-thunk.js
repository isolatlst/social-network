import { reset } from "redux-form"
import {
	profileAPI
} from "../../API/api"
import {
	toggleFetchStatus, setUserProfile, updateProfileData, deletePost
} from "../actionCreators/profile-action-creator"


export const getProfile = (userId) => async (dispatch) => {
	dispatch(toggleFetchStatus(true))
	let { profileData } = await profileAPI.getProfileAPI(userId)
	dispatch(setUserProfile(profileData))
}

export const updateProfile = (incData, incType, userId, form) => async (dispatch) => {
	let { err, data, type } = await profileAPI.updateProfileAPI(incData, incType, userId)
	if (!err) {
		dispatch(updateProfileData(data, type))
		dispatch(reset(form))
	}
}

export const deleteProfilePost = (incPostId, profileId) => async (dispatch) => {
	let { err, postId } = await profileAPI.deletePostAPI(incPostId, profileId)
	if (!err) {
		dispatch(deletePost(postId, !err))
	}
}