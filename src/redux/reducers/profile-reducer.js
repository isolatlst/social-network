import { ADD_POST, SET_USER_PROFILE, TOGGLE_FETCHING_STATUS, UPDATE_PROFILE } from '../actions/profile-action'

let initialState = {
	profileData: {
		name: '',
		birth: '',
		location: '',
		education: '',
		site: '',
		avatar: '',
		wallpaper: '',
		postsData: [],

	}, // объект с пустыми данными
	isFetching: false,  //fixme
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				profileData: {
					...state.profileData,
					postsData: [
						...state.profileData.postsData,
						{
							id: state.profileData.postsData.length + 1,
							post: action.postText
						}
					],
				}
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profileData: action.data,
				isFetching: false
			}
		}
		case TOGGLE_FETCHING_STATUS: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}
		case UPDATE_PROFILE: {
			state.profileData[action.dataType] = action.data  //fixme please
			return {
				...state,
				profileData: { ...state.profileData }

			}
		}

		default: return state
	}
}


export default profileReducer