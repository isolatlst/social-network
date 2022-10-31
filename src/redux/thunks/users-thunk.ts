import {followAPI, usersAPI} from "../../API/api"
import {changeTotalPage, setPagesCount, setPageSize, setUsers, toggleFetchStatus, toggleFollowingStatus, toggleIsFollowingProgress} from "../actionCreators/users-action-creator"
import {ThunkAction} from "redux-thunk";
import {UsersReducerActionType} from "../../types/types";
import {AppStateType} from "../redux-store";


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UsersReducerActionType>

export const getUsers = (totalPage: number, pageSize: number): ThunkType =>
    async (dispatch) => {
        dispatch(toggleFetchStatus(true))
        dispatch(changeTotalPage(totalPage))
        dispatch(setPageSize(pageSize))
        let {usersData, pagesCount} = await usersAPI.getUsersAPI(totalPage, pageSize)
        dispatch(setUsers(usersData))
        dispatch(setPagesCount(pagesCount))
    }


export const toggleFollow = (userId: number, isFollowed: boolean): ThunkType =>
    async (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        let {err, status} = await followAPI.toggleFollowAPI(isFollowed, userId)
        if (!err) {
            dispatch(toggleFollowingStatus(userId, status))
            dispatch(toggleIsFollowingProgress(false, userId))
        }
    }