import {
	profileAPI
} from "../../API/api"
import {
	toggleFetchStatus, setUserProfile
} from "../actionCreators/profile-action-creator"


export const getProfile = (userId) => async (dispatch) => {
	dispatch(toggleFetchStatus(true))
	let response = await profileAPI.getProfileAPI(userId)
	dispatch(setUserProfile(response.profileData))
}
