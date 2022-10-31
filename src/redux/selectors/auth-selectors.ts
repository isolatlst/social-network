import {AppStateType} from "../redux-store";


// Экспортируемые селекторы
export const getMyUserId = (state: AppStateType) => (state.auth.userId)  				// Id моего аккаунта
export const getIsAuth = (state: AppStateType) => (state.auth.authStatus)               // Boolean isAuth