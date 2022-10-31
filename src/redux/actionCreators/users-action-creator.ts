import {SET_PAGE_SIZE, SET_PAGES_COUNT, SET_TOTAL_PAGE, SET_USERS, TOGGLE_FETCHING_STATUS, TOGGLE_FOLLOW_TO_USER, TOGGLE_IS_FOLLOWING_PROGRESS} from '../actions/users-action'
import {UserType} from "../reducers/users-reducer"

export type SetUsersActionType = {
    type: typeof SET_USERS
    usersData: Array<UserType>
}
export type ToggleFollowingStatusActionType = {
    type: typeof TOGGLE_FOLLOW_TO_USER
    userId: number
    followedStatus: boolean
}
export type ChangeTotalPageActionType = {
    type: typeof SET_TOTAL_PAGE
    totalPage: number
}
export type SetPagesCountActionType = {
    type: typeof SET_PAGES_COUNT
    pagesCount: number
}
export type SetPageSizeActionType = {
    type: typeof SET_PAGE_SIZE
    pageSize: number
}
export type ToggleFetchStatusActionType = {
    type: typeof TOGGLE_FETCHING_STATUS
    isFetching: boolean
}
export type ToggleIsFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

//Messages export Action Creator
export const setUsers = (usersData: Array<UserType>): SetUsersActionType => ({type: SET_USERS, usersData})
export const toggleFollowingStatus = (userId: number, followedStatus: boolean): ToggleFollowingStatusActionType => ({type: TOGGLE_FOLLOW_TO_USER, userId, followedStatus})
export const changeTotalPage = (totalPage: number): ChangeTotalPageActionType => ({type: SET_TOTAL_PAGE, totalPage})
export const setPagesCount = (pagesCount: number): SetPagesCountActionType => ({type: SET_PAGES_COUNT, pagesCount})
export const setPageSize = (pageSize: number): SetPageSizeActionType => ({type: SET_PAGE_SIZE, pageSize})
export const toggleFetchStatus = (isFetching: boolean): ToggleFetchStatusActionType => ({type: TOGGLE_FETCHING_STATUS, isFetching})
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): ToggleIsFollowingProgressActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})