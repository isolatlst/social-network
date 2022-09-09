//Profile const
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

//Profile export Action Creator
export const addPostACreator = (text) => ({ type: ADD_POST, postText: text })
export const updateNewPostACreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, postText: text })

const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: state.postsData.length + 1,
				post: state.newPostText
			}
			if (state.newPostText) {
				state.postsData.push(newPost)
				state.newPostText = ''
			}
			return state
		}

		case UPDATE_NEW_POST_TEXT: {
			state.newPostText = action.postText
			return state
		}

		default: return state
	}
}


export default profileReducer