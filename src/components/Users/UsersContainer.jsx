import Users from './Users'
import { setTotalPageACreator, setUsersACreator, toggleFollowToUserACreator, setPagesCountACreator, setPageSizeACreator } from '../../redux/actionCreators/users-action-creator'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		usersData: state.usersPage.usersData,
		pagesCount: state.usersPage.pagesCount, // число страниц
		pageSize: state.usersPage.pageSize,     // размер страницы (кол. пользователей)
		totalPage: state.usersPage.totalPage    // номер текущей страницы
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (usersData) => { dispatch(setUsersACreator(usersData)) },
		toggleFollow: (userId) => { dispatch(toggleFollowToUserACreator(userId)) },
		changeTotalPage: (pageNumber) => { dispatch(setTotalPageACreator(pageNumber)) },
		setPagesCount: (pagesCount) => { dispatch(setPagesCountACreator(pagesCount)) },
		setPageSize: (pageSize) => { dispatch(setPageSizeACreator(pageSize)) }
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;