import {AddPostAPIType, DeletePostAPIType, GetProfileAPIType, UpdateProfileAPIType} from "../types/responses";
import axios from "axios";
import {UpdateProfileDataType} from "../types/forms";
import {_getConfig} from "./api";

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