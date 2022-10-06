import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import UserPreloader from '../common/userPreloader/UserPreloader'
import { getUsers, toggleFollow } from '../../redux/thunks/users-thunk'


class UsersContainer extends React.Component {
	componentDidMount() {
		if (this.props.auth) {
			this.props.getUsers(this.props.totalPage, this.props.pageSize)
		}
	}
	toggleFollowFunc = (userId, isFollowed) => {
		this.props.toggleFollow(userId, isFollowed)
	}
	swapPage = (e) => {
		if (e.target.localName === 'span') {
			this.props.getUsers(Number(e.target.innerHTML), this.props.pageSize)
		}
	}
	selectPageSize = (e) => {
		if (e.target.localName === 'span') {
			this.props.getUsers(1, Number(e.target.innerHTML))
		}
	}

	render() {
		if (!this.props.auth) { return <div>Please auth</div> }
		if (this.props.isFetching) { return <UserPreloader /> }
		return <Users
			{...this.props}
			swapPage={this.swapPage}
			selectPageSize={this.selectPageSize}
			toggleFollowFunc={this.toggleFollowFunc}
		/>
	}
}


let mapStateToProps = (state) => {
	return {
		auth: state.auth.authStatus,				 								// boolean авторизован ли пользователь
		myId: state.auth.userId,					 								// Id аккаунта (моего)
		isFetching: state.usersPage.isFetching,								// Boolean идёт ли загрузка страницы
		usersData: state.usersPage.usersData,   								// Данные пользователей
		pagesCount: state.usersPage.pagesCount, 								// Число страниц
		pageSize: state.usersPage.pageSize,     								// Размер страницы (кол. пользователей)
		totalPage: state.usersPage.totalPage,   								// Номер текущей страницы
		isFollowingInProgress: state.usersPage.isFollowingInProgress   // boolean запрос на подписку
	}
}



export default connect(mapStateToProps, {
	toggleFollow,															// Thunk для изменения статуса запроса на подписку
	getUsers																	// Thunk для получения пользователей
})(UsersContainer)
