import { TOGGLE_FOLLOW_TO_USER, SET_USERS, SET_TOTAL_PAGE, SET_PAGES_COUNT, SET_PAGE_SIZE, TOGGLE_FETCHING_STATUS } from '../actions/users-action'

//Messages export Action Creator
export const setUsers = (usersData) => ({ type: SET_USERS, usersData })
export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW_TO_USER, userId })
export const changeTotalPage = (totalPage) => ({ type: SET_TOTAL_PAGE, totalPage })
export const setPagesCount = (pagesCount) => ({ type: SET_PAGES_COUNT, pagesCount })
export const setPageSize = (pageSize) => ({ type: SET_PAGE_SIZE, pageSize })
export const toggleFetchStatus = (isFetching) => ({ type: TOGGLE_FETCHING_STATUS, isFetching })
