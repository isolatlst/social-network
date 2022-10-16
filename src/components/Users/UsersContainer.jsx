import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirectComponent from '../common/HOCs/AuthRedirect/WithAuthRedirectComponent'
import Users from './Users'
import { getUsers, toggleFollow } from '../../redux/thunks/users-thunk'
import UsersPreloader from '../common/Preloaders/Users/UsersPreloader'


class UsersContainer extends React.Component {
	componentDidMount() { this.props.getUsers(this.props.totalPage, this.props.pageSize) }
	toggleFollowFunc = (userId, isFollowed) => { this.props.toggleFollow(userId, isFollowed) }
	swapPage = (e) => { if (e.target.localName === 'span') this.props.getUsers(Number(e.target.innerHTML), this.props.pageSize) }
	selectPageSize = (e) => { if (e.target.localName === 'span') this.props.getUsers(1, Number(e.target.innerHTML)) }
	render() {
		if (this.props.isFetching) return <UsersPreloader />  //fixme
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
		myId: state.auth.userId,					 								// Id аккаунта (моего)
		usersData: state.usersPage.usersData,   								// Данные пользователей
		pagesCount: state.usersPage.pagesCount, 								// Число страниц
		pageSize: state.usersPage.pageSize,     								// Размер страницы (кол. пользователей)
		totalPage: state.usersPage.totalPage,   								// Номер текущей страницы
		isFollowingInProgress: state.usersPage.isFollowingInProgress,  // boolean запрос на подписку
		isFetching: state.usersPage.isFetching,								// Boolean идёт ли загрузка страницы                         //fixme
	}
}


export default compose(
	connect(mapStateToProps, { toggleFollow, getUsers }),
	withAuthRedirectComponent
)(UsersContainer)