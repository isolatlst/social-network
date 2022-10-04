import { ADD_POST, UPDATE_NEW_POST_TEXT, SET_USER_PROFILE, TOGGLE_FETCHING_STATUS } from '../actions/profile-action'

let initialState = {
	profileData: {
		/*
			name: 'Kirill Gurin',
			birth: '29.12.2001',
			location: { city: 'Minsk', country: 'Belarus' },
			education: 'BSUIR',
			site: "github.com/isolatlst",
			avatar: 'https://pbs.twimg.com/profile_banners/157025420/1537698290/1500x500',
			wallpaper: 'https://wallup.net/wp-content/uploads/2019/09/182467-yosemite.jpg',
			postsData: [
				{ id: 1, post: 'I try to learning react' },
				{ id: 2, post: 'Hello! Its my social network' },
			],
		*/
	}, // null
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
				profileData: {
					...action.data
				},
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