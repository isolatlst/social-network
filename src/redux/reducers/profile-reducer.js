import { DELETE_POST, SET_USER_PROFILE, TOGGLE_FETCHING_STATUS, UPDATE_PROFILE } from '../actions/profile-action'

let initialState = {
	userId: 0,
	email: '',
	firstName: '',
	lastName: '',
	name: '',
	birth: '',
	location: '',
	education: '',
	site: '',
	avatar: '',
	wallpaper: '',
	postsData: [],
	isFetching: false,
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_PROFILE: {
			return {
				...state,
				...action.data,
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
			return {
				...state,
				[action.dataType]: Array.isArray(state[action.dataType]) ? [action.data, ...state[action.dataType]] : action.data
			}
		}
		case DELETE_POST: {
			return {
				...state,
				postsData: action.isDeleted
					? state.postsData.filter(post => post.id !== action.postId)
					: [...state.postsData]
			}
		}

		default: return state
	}
}


export default profileReducer