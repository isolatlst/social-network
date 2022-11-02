import {LoginDataType, RegisterDataType} from "../types/forms";
import {LoginAPIType, LogoutAPIType, RegisterAPIType} from "../types/responses";
import axios from "axios";
import {_getConfig} from "./api";

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