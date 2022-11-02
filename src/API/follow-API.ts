import {ToggleFollowAPIType} from "../types/responses";
import axios from "axios";
import {_getConfig} from "./api";

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