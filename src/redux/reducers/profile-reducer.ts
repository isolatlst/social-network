import {ADD_POST, DELETE_POST, SET_USER_PROFILE, TOGGLE_FETCHING_STATUS} from '../actions/profile-action'

export type InitialStateType = typeof initialState
export type PostType = {
    id: number
    post: string
}

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
    postsData: [] as Array<PostType>,
    isFetching: false,
}

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                ...action.data,
                isFetching: false
            }
        }
        case TOGGLE_FETCHING_STATUS: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, action.newPost]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: action.isDeleted
                    ? state.postsData.filter(post => post.id !== action.postId)
                    : [...state.postsData]
            }
        }

        default:
            return state
    }
}


export default profileReducer