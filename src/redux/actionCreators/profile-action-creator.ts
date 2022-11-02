import {InitialStateType} from "../reducers/profile-reducer";
import {InferActionsTypes} from "../redux-store";
import {PostType} from "../../types/state-types";
import {UpdateProfileDataType} from "../../types/forms";

export type ProfileActionsType = InferActionsTypes<typeof profileACs>


export const profileACs = {
    setUserProfile: (profile: InitialStateType) => ({type: 'PROFILE/SET_USER_PROFILE', profile} as const),
    toggleFetchStatus: (isFetching: boolean) => ({type: 'PROFILE/TOGGLE_FETCHING_STATUS', isFetching} as const),
    addPost: (newPost: PostType) => ({type: 'PROFILE/ADD_POST', newPost} as const),
    deletePost: (postId: number, isDeleted: boolean) => ({type: 'PROFILE/DELETE_POST', postId, isDeleted} as const),
    updateProfileData: (data: UpdateProfileDataType) => ({type: 'PROFILE/UPDATE-PROFILE', data} as const),
}
