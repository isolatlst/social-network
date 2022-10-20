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
	let { usersData, pagesCount } = await usersAPI.getUsersAPI({ totalPage, pageSize })
	dispatch(setUsers(usersData))
	dispatch(setPagesCount(pagesCount))
}


export const toggleFollow = (userId, isFollowed) => async (dispatch) => {
	dispatch(toggleIsFollowingProgress(true, userId))
	let { err, status } = await followAPI.toggleFollowAPI(isFollowed, userId)
	if (!err) {
		dispatch(toggleFollowingStatus(userId, status))
		dispatch(toggleIsFollowingProgress(false, userId))
	}
}