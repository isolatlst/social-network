import {InferActionsTypes} from "../redux-store";
import {UserType} from "../../types/state-types";

export type UsersActionsType = InferActionsTypes<typeof usersACs>

export const usersACs = {
    setUsers: (usersData: Array<UserType>) => ({type: 'USERS/SET_USERS', usersData} as const),
    toggleFollowingStatus: (userId: number, followedStatus: boolean) => ({type: 'USERS/TOGGLE_FOLLOW_TO_USER', userId, followedStatus} as const),
    changeTotalPage: (totalPage: number) => ({type: 'USERS/SET_TOTAL_PAGE', totalPage} as const),
    setPagesCount: (pagesCount: number) => ({type: 'USERS/SET_PAGES_COUNT', pagesCount} as const),
    setPageSize: (pageSize: number) => ({type: 'USERS/SET_PAGE_SIZE', pageSize} as const),
    toggleFetchStatus: (isFetching: boolean) => ({type: 'USERS/TOGGLE_FETCHING_STATUS', isFetching} as const),
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => ({type: 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const),
}
