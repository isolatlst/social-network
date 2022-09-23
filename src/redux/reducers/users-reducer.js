import { TOGGLE_FOLLOW_TO_USER, SET_USERS, SET_TOTAL_PAGE, SET_PAGES_COUNT, SET_PAGE_SIZE } from '../actions/users-action'

let initialState = {
	usersData: [],
	pagesCount: 0,
	pageSize: 3,
	totalPage: 1
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS: {
			return {
				...state,
				usersData: action.usersData
			}
		}

		case TOGGLE_FOLLOW_TO_USER: {
			return {
				...state,
				usersData: state.usersData.map(user => user.id === action.userId ? { ...user, followed: !user.followed } : user)
			}
		}

		case SET_TOTAL_PAGE: {
			return {
				...state,
				totalPage: action.totalPage
			}
		}
		case SET_PAGES_COUNT: {
			return {
				...state,
				pagesCount: action.pagesCount
			}
		}

		case SET_PAGE_SIZE: {
			return {
				...state,
				pageSize: action.pageSize
			}
		}

		default: return state
	}
}

export default usersReducer