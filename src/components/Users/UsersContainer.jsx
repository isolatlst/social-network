import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Users from './Users'
import { setUsers, toggleFollow, changeTotalPage, setPagesCount, setPageSize, toggleFetchStatus } from '../../redux/actionCreators/users-action-creator'
import { toggleAuthStatus } from '../../redux/actionCreators/auth-action-creator'
import UserPreloader from '../common/userPreloader/UserPreloader'


class UsersContainer extends React.Component {
	getUsersRequest = async (params) => await axios.get(`users/?p=${params.totalPage}&count=${params.pageSize}`, params.withCredentials)

	async componentDidMount() {
		if (this.props.auth) {
			this.props.toggleFetchStatus(true)
			let response = await this.getUsersRequest({ totalPage: this.props.totalPage, pageSize: this.props.pageSize, withCredentials: true })

			this.props.setUsers(response.data.usersData)
			this.props.setPagesCount(response.data.pagesCount)
		}
	}
	toggleFollowFunc = async (userId, isFollowed) => {
		let response = !isFollowed
			? await axios.post(`follow/${userId}`, { withCredentials: true })
			: await axios.delete(`follow/${userId}`, { withCredentials: true })

		this.props.toggleFollow(userId, response.data.status)
	}

	swapPage = async (e) => {
		if (e.target.localName === 'span') {
			this.props.toggleFetchStatus(true)
			this.props.changeTotalPage(Number(e.target.innerHTML))

			let response = await this.getUsersRequest({ totalPage: Number(e.target.innerHTML), pageSize: this.props.pageSize })

			this.props.setUsers(response.data.usersData)
		}
	}
	selectPageSize = async (e) => {
		if (e.target.localName === 'span') {
			this.props.toggleFetchStatus(true)
			this.props.changeTotalPage(1)
			this.props.setPageSize(Number(e.target.innerHTML))

			let response = await this.getUsersRequest({ totalPage: this.props.totalPage, pageSize: Number(e.target.innerHTML) })

			this.props.setUsers(response.data.usersData)
			this.props.setPagesCount(response.data.pagesCount)
		}
	}

	render() {
		if (!this.props.auth) {
			return <div>Please auth</div>
		}
		if (this.props.isFetching) {
			return <UserPreloader />
		}
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
		auth: state.auth.authStatus,				 // статус аутентификации
		myId: state.auth.userId,					 // Id моего профиля
		isFetching: state.usersPage.isFetching,
		usersData: state.usersPage.usersData,   // данные пользователей
		pagesCount: state.usersPage.pagesCount, // число страниц
		pageSize: state.usersPage.pageSize,     // размер страницы (кол. пользователей)
		totalPage: state.usersPage.totalPage,   // номер текущей страницы
	}
}



export default connect(mapStateToProps, { setUsers, toggleFollow, changeTotalPage, setPagesCount, setPageSize, toggleFetchStatus, toggleAuthStatus })(UsersContainer)
