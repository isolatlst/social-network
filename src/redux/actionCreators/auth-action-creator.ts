import {InferActionsTypes} from "../redux-store";

export type AuthActionsType = InferActionsTypes<typeof authACs>

export const authACs = {
    setUserId: (userId: number) => ({type: 'AUTH/SET_USER_DATA', userId} as const),
    toggleAuthStatus: (authStatus: boolean) => ({type: 'AUTH/TOGGLE_AUTH_STATUS', authStatus} as const),
    setUserPhoto: (avatar: string) => ({type: 'AUTH/SET_USER_PHOTO', avatar} as const),
}
