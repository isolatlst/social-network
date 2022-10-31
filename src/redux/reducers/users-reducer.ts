import {SET_PAGE_SIZE, SET_PAGES_COUNT, SET_TOTAL_PAGE, SET_USERS, TOGGLE_FETCHING_STATUS, TOGGLE_FOLLOW_TO_USER, TOGGLE_IS_FOLLOWING_PROGRESS} from '../actions/users-action'
import {UsersReducerActionType} from "../../types/types";

export type UserType = {
    avatar: string
    firstName: string
    followed: boolean
    lastName: string
    location: string
    userId: number
}
type InitialStateType = typeof initialState

let initialState = {
    usersData: [] as Array<UserType>,
    pagesCount: 0,
    pageSize: 3,
    totalPage: 1,
    isFetching: false,
    isFollowingInProgress: [] as Array<number>
}

const usersReducer = (state = initialState, action: UsersReducerActionType): InitialStateType => {
    switch (action.type) {

        case SET_USERS: {
            return {
                ...state,
                usersData: action.usersData,
                isFetching: false
            }
        }
        case TOGGLE_FOLLOW_TO_USER: {
            return {
                ...state,
                usersData: state.usersData.map(user => user.userId === action.userId ? {...user, followed: action.followedStatus} : user)
            }
        }
        case SET_TOTAL_PAGE: {
            return {
                ...state,
                totalPage: action.totalPage
            }
        }
        case SET_PAGES_COUNT: {
            return {
                ...state,
                pagesCount: action.pagesCount
            }
        }
        case SET_PAGE_SIZE: {
            return {
                ...state,
                pageSize: action.pageSize
            }
        }
        case TOGGLE_FETCHING_STATUS: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
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