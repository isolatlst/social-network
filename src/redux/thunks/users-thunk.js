import {
	usersAPI,
	followAPI
} from "../../API/api"
import {
	changeTotalPage, setPagesCount, setPageSize, setUsers, toggleFetchStatus,
	toggleIsFollowingProgress, toggleFollowingStatus
} from "../actionCreators/users-action-creator"


export const getUsers = (totalPage, pageSize) => async (dispatch) => {
	dispatch(toggleFetchStatus(true))
	dispatch(changeTotalPage(totalPage))
	dispatch(setPageSize(pageSize))
	let response = await usersAPI.getUsersAPI({ totalPage, pageSize })
	dispatch(setUsers(response.usersData))
	dispatch(setPagesCount(response.pagesCount))
}


export const toggleFollow = (userId, isFollowed) => async (dispatch) => {
	dispatch(toggleIsFollowingProgress(true, userId))
	let response = !isFollowed
		? await followAPI.toggleFollowAPI('post', userId)
		: await followAPI.toggleFollowAPI('delete', userId)
	if (response.err === false) {
		dispatch(toggleFollowingStatus(userId, response.status))
		dispatch(toggleIsFollowingProgress(false, userId))
	}
}