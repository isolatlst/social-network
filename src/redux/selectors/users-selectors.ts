import {createSelector} from "reselect"
import {AppStateType} from "../redux-store";


// База
const _getUsers = (state: AppStateType) => (state.usersPage.usersData)


// Экспортируемые селекторы
export const getUsersSelector = createSelector([_getUsers], users => {									// пример сложного селектора
    return users.filter(u => true)
})    																													// Данные пользователей
export const getPagesCountSelector = (state: AppStateType) => (state.usersPage.pagesCount)  							// Число страниц
export const getPagesSizeSelector = (state: AppStateType) => (state.usersPage.pageSize)   								// Размер страницы (кол. пользователей)
export const getTotalPageSelector = (state: AppStateType) => (state.usersPage.totalPage)    			 				// Номер текущей страницы
export const getFollowingInProgressSelector = (state: AppStateType) => (state.usersPage.isFollowingInProgress)	        // Boolean запрос на подписку
export const getIsFetchingSelector = (state: AppStateType) => (state.usersPage.isFetching) 								// Boolean идёт ли загрузка страницы