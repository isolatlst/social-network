import axios, {Method} from 'axios'
import {AddPostAPIType, DeletePostAPIType, GetProfileAPIType, GetUsersAPIType, LoginAPIType, LoginDataType, LogoutAPIType, RegisterAPIType, RegisterDataType, ToggleFollowAPIType, UpdateProfileAPIType, UpdateProfileDataType} from "../types/types";

const _getConfig = (method: Method, url: string, data = null as any) => ({
    method,
    url,
    xhrFields: {
        withCredentials: true
    },
    data
})

export const usersAPI = {
    async getUsersAPI(totalPage: number, pageSize: number) {
        const {data}: GetUsersAPIType = await axios(
            _getConfig(
                'get',
                `/users/?p=${totalPage}&count=${pageSize}`,
            )
        )
        return data
    }
}
export const followAPI = {
    async toggleFollowAPI(isFollowed: boolean, userId: number) {
        const {data}: ToggleFollowAPIType = await axios(
            _getConfig(
                isFollowed ? 'delete' : 'post',
                `/follow/${userId}`,
            )
        )
        return data
    }
}
export const authAPI = {
    async loginAPI(loginData: LoginDataType) {
        const {data}: LoginAPIType = await axios(
            _getConfig(
                'post',
                `/login`,
                loginData
            )
        )
        return data
    },
    async registerAPI(registerData: RegisterDataType) {
        const {data}: RegisterAPIType = await axios(
            _getConfig(
                'post',
                `/register`,
                registerData
            )
        )
        return data
    },
    async logoutAPI() {
        const {data}: LogoutAPIType = await axios(
            _getConfig(
                'delete',
                `/logout`
            )
        )
        return data
    }
}
export const profileAPI = {
    async getProfileAPI(userId: number) {
        const {data}: GetProfileAPIType = await axios(
            _getConfig(
                'get',
                `/profile/${userId}`,
            )
        )
        return data
    },
    async updateProfileAPI(incData: UpdateProfileDataType) {
        const {data}: UpdateProfileAPIType = await axios(
            _getConfig(
                'put',
                `/profile`,
                {data: incData}
            )
        )
        return data
    },
    async addPostAPI(post: string) {
        const {data}: AddPostAPIType = await axios(
            _getConfig(
                `post`,
                `/profile/add-post`,
                {post}
            )
        )
        return data
    },
    async deletePostAPI(postId: number) {
        const {data}: DeletePostAPIType = await axios(
            _getConfig(
                'delete',
                `/profile/delete-post`,
                {postId}
            )
        )
        return data
    }
}