import {
	SET_USERS, SET_TOTAL_PAGE, SET_PAGES_COUNT, SET_PAGE_SIZE,
	TOGGLE_FOLLOW_TO_USER, TOGGLE_FETCHING_STATUS, TOGGLE_IS_FOLLOWING_PROGRESS
} from '../actions/users-action'

//Messages export Action Creator
export const setUsers = (usersData) => ({ type: SET_USERS, usersData })
export const toggleFollowingStatus = (userId, followedStatus) => ({ type: TOGGLE_FOLLOW_TO_USER, userId, followedStatus })
export const changeTotalPage = (totalPage) => ({ type: SET_TOTAL_PAGE, totalPage })
export const setPagesCount = (pagesCount) => ({ type: SET_PAGES_COUNT, pagesCount })
export const setPageSize = (pageSize) => ({ type: SET_PAGE_SIZE, pageSize })
export const toggleFetchStatus = (isFetching) => ({ type: TOGGLE_FETCHING_STATUS, isFetching })
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })