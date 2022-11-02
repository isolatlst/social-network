import {UsersActionsType} from "../actionCreators/users-action-creator";
import {UserType} from "../../types/state-types";


type InitialStateType = typeof initialState

let initialState = {
    usersData: [] as Array<UserType>,
    pagesCount: 0,
    pageSize: 3,
    totalPage: 1,
    isFetching: false,
    isFollowingInProgress: [] as Array<number>
}

const usersReducer = (state = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {

        case "USERS/SET_USERS": {
            return {
                ...state,
                usersData: action.usersData,
                isFetching: false
            }
        }
        case "USERS/TOGGLE_FOLLOW_TO_USER": {
            return {
                ...state,
                usersData: state.usersData.map(user => user.userId === action.userId ? {...user, followed: action.followedStatus} : user)
            }
        }
        case "USERS/SET_TOTAL_PAGE": {
            return {
                ...state,
                totalPage: action.totalPage
            }
        }
        case "USERS/SET_PAGES_COUNT": {
            return {
                ...state,
                pagesCount: action.pagesCount
            }
        }
        case "USERS/SET_PAGE_SIZE": {
            return {
                ...state,
                pageSize: action.pageSize
            }
        }
        case "USERS/TOGGLE_FETCHING_STATUS": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case "USERS/TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state
    }
}

export default usersReducer