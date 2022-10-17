import { createSelector } from "reselect"


// База
const _getUsers = (state) => (state.usersPage.usersData)




// Экспортируемые селекторы
export const getUsersSelector = createSelector([_getUsers], users => {										// пример сложного селектора
	return users.filter(u => true)
})    																															// Данные пользователей
export const getPagesCountSelector = (state) => (state.usersPage.pagesCount)  							// Число страниц
export const getPagesSizeSelector = (state) => (state.usersPage.pageSize)   								// Размер страницы (кол. пользователей)
export const getTotalPageSelector = (state) => (state.usersPage.totalPage)    			 				// Номер текущей страницы
export const getFollowingInProgressSelector = (state) => (state.usersPage.isFollowingInProgress)	// Boolean запрос на подписку
export const getIsFetchingSelector = (state) => (state.usersPage.isFetching) 								// Boolean идёт ли загрузка страницы