import { TOGGLE_FOLLOW_TO_USER, SET_USERS, SET_TOTAL_PAGE, SET_PAGES_COUNT, SET_PAGE_SIZE } from '../actions/users-action'

//Messages export Action Creator
export const setUsersACreator = (usersData) => ({ type: SET_USERS, usersData: usersData })
export const toggleFollowToUserACreator = (userId) => ({ type: TOGGLE_FOLLOW_TO_USER, userId: userId })
export const setTotalPageACreator = (totalPage) => ({ type: SET_TOTAL_PAGE, totalPage: totalPage })
export const setPagesCountACreator = (pagesCount) => ({ type: SET_PAGES_COUNT, pagesCount: pagesCount })
export const setPageSizeACreator = (pageSize) => ({ type: SET_PAGE_SIZE, pageSize: pageSize })