import {
	profileAPI
} from "../../API/api"
import {
	toggleFetchStatus, setUserProfile, updateProfileData
} from "../actionCreators/profile-action-creator"


export const getProfile = (userId) => async (dispatch) => {
	dispatch(toggleFetchStatus(true))
	let response = await profileAPI.getProfileAPI(userId)
	dispatch(setUserProfile(response.profileData))
}

export const updateProfile = (data, type) => async (dispatch) => {
	let response = await profileAPI.updateProfileAPI(data, type)
	console.log(response);

	if (!response.err) {
		dispatch(updateProfileData(response.data, response.type))
	}
}
