import { TOGGLE_FOLLOW_TO_USER, SET_USERS } from '../actions/users-action'

//Messages export Action Creator
export const setUsersACreator = (usersData) => ({ type: SET_USERS, usersData: usersData })
export const toggleFollowToUserACreator = (userId) => ({ type: TOGGLE_FOLLOW_TO_USER, userId: userId })