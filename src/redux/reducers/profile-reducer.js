import { ADD_POST, UPDATE_NEW_POST_TEXT } from '../actions/profile-action'

let initialState = {
	profileData: {
		name: 'Kirill Gurin',
		birth: '29.12.2001',
		city: 'Minsk',
		education: 'BSUIR',
		site: "github.com/isolatlst",
		avatar: 'https://pbs.twimg.com/profile_banners/157025420/1537698290/1500x500',
		wallpaper: 'https://wallup.net/wp-content/uploads/2019/09/182467-yosemite.jpg',
		postsData: [
			{ id: 1, post: 'I try to learning react' },
			{ id: 2, post: 'Hello! Its my social network' },
		],
		newPostText: ''
	}
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let localState = { ...state }
			localState.profileData = { ...state.profileData }
			localState.profileData.postsData = [...state.profileData.postsData]

			let newPost = {
				id: localState.profileData.postsData.length + 1,
				post: localState.profileData.newPostText
			}
			if (localState.profileData.newPostText) {
				localState.profileData.postsData.push(newPost)
				localState.profileData.newPostText = ''
			}
			return localState
		}

		case UPDATE_NEW_POST_TEXT: {
			let localState = { ...state }
			localState.profileData = { ...state.profileData }

			localState.profileData.newPostText = action.postText
			return localState
		}
		default: return state
	}
}


export default profileReducer