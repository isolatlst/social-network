import {ProfileActionsType} from "../actionCreators/profile-action-creator";
import {PostType} from "../../types/state-types";

export type InitialStateType = typeof initialState

let initialState = {
    userId: 0,
    email: '',
    firstName: '',
    lastName: '',
    birth: '',
    location: '',
    education: '',
    site: '',
    avatar: '',
    wallpaper: '',
    followed: [] as Array<number> | [],
    postsData: [] as Array<PostType> | [],
    isFetching: false,
}

const profileReducer = (state = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case "PROFILE/SET_USER_PROFILE": {
            return {
                ...state,
                ...action.profile,
                isFetching: false
            }
        }
        case "PROFILE/TOGGLE_FETCHING_STATUS": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case "PROFILE/ADD_POST": {
            return {
                ...state,
                postsData: [...state.postsData, action.newPost]
            }
        }
        case "PROFILE/DELETE_POST": {
            return {
                ...state,
                postsData: action.isDeleted
                    ? [...state.postsData].filter(post => post.id !== action.postId)
                    : [...state.postsData]
            }
        }
        case "PROFILE/UPDATE-PROFILE": {
            return {
                ...state,
                ...action.data
            }
        }

        default:
            return state
    }
}


export default profileReducer