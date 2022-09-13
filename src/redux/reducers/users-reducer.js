import { TOGGLE_FOLLOW_TO_USER, SET_USERS } from '../actions/users-action'

let initialState = {
	usersData: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS: {
			return {
				...state,
				usersData: [...state.usersData, ...action.usersData]
			}
		}

		case TOGGLE_FOLLOW_TO_USER: {
			return {
				...state,
				usersData: state.usersData.map(user => user.id === action.userId ? { ...user, followed: !user.followed } : user)
			}
		}

		default: return state
	}
}

export default usersReducer