import {GetUsersAPIType} from "../types/responses";
import axios from "axios";
import {_getConfig} from "./api";

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