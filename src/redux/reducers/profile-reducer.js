import { DELETE_POST, SET_USER_PROFILE, TOGGLE_FETCHING_STATUS, ADD_POST } from '../actions/profile-action'

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
		case ADD_POST: {
			return {
				...state,
				postsData: [...state.postsData, action.newPost]
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