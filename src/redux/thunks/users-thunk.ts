import {ThunkType} from "../redux-store";
import {usersACs, UsersActionsType} from "../actionCreators/users-action-creator";
import {usersAPI} from "../../API/users-API";
import {followAPI} from "../../API/follow-API";


type Thunk = ThunkType<UsersActionsType>

export const getUsers = (totalPage: number, pageSize: number): Thunk =>
    async (dispatch) => {
        dispatch(usersACs.toggleFetchStatus(true))
        let {usersData, pagesCount} = await usersAPI.getUsersAPI(totalPage, pageSize)
        dispatch(usersACs.setUsers(usersData))
        dispatch(usersACs.setPagesCount(pagesCount))
    }


export const toggleFollow = (userId: number, isFollowed: boolean): Thunk =>
    async (dispatch) => {
        dispatch(usersACs.toggleIsFollowingProgress(true, userId))
        let {err, status} = await followAPI.toggleFollowAPI(isFollowed, userId)
        if (!err) {
            dispatch(usersACs.toggleFollowingStatus(userId, status))
            dispatch(usersACs.toggleIsFollowingProgress(false, userId))
        }
    }