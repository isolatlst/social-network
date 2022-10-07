import { ADD_POST, UPDATE_NEW_POST_TEXT, SET_USER_PROFILE, TOGGLE_FETCHING_STATUS } from '../actions/profile-action'

let initialState = {
	profileData: {
		name: '',
		birth: '',
		location: { city: '', country: '' },
		education: '',
		site: '',
		avatar: '',
		wallpaper: '',
		postsData: [],

	}, // объект с пустыми данными
	isFetching: false,  //fixme
	newPostText: ''
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
							post: state.newPostText
						}
					],
				},
				newPostText: ''
			}
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				profileData: {
					...state.profileData,
				},
				newPostText: action.postText
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

		default: return state
	}
}


export default profileReducer