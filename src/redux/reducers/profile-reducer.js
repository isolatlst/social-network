import { ADD_POST, DELETE_POST, SET_USER_PROFILE, TOGGLE_FETCHING_STATUS, UPDATE_PROFILE } from '../actions/profile-action'

let initialState = {
	userId: NaN,
	name: '',
	birth: '',
	location: '',
	education: '',
	site: '',
	avatar: '',
	wallpaper: '',
	postsData: [],
	isFetching: false,  //fixme
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				postsData: [
					...state.postsData,
					{
						id: state.postsData.length + 1,
						post: action.postText
					}
				],

			}
		}
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
			state[action.dataType] = action.data  //fixme please
			return {
				...state
			}
		}
		case DELETE_POST: {
			return {
				...state,
				postsData: state.postsData.filter(post => post.id !== action.postId)

			}
		}

		default: return state
	}
}


export default profileReducer