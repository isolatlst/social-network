import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Users from './Users'
import { setUsers, toggleFollow, changeTotalPage, setPagesCount, setPageSize, toggleFetchStatus } from '../../redux/actionCreators/users-action-creator'


class UsersContainer extends React.Component {
	requestServer = async (params) => await axios.get(`http://localhost:3001/users/?p=${params.totalPage}&count=${params.pageSize}`)

	async componentDidMount() {
		this.props.toggleFetchStatus(true)
		let response = await this.requestServer({ totalPage: this.props.totalPage, pageSize: this.props.pageSize })

		this.props.setUsers(response.data.usersData)
		this.props.setPagesCount(response.data.pagesCount)
		this.props.toggleFetchStatus(false)
	}
	swapPage = async (e) => {
		if (e.target.localName === 'span') {
			this.props.toggleFetchStatus(true)
			this.props.changeTotalPage(Number(e.target.innerHTML))

			let response = await this.requestServer({ totalPage: Number(e.target.innerHTML), pageSize: this.props.pageSize })

			this.props.setUsers(response.data.usersData)
			this.props.toggleFetchStatus(false)
		}
	}
	selectPageSize = async (e) => {
		if (e.target.localName === 'span') {
			this.props.changeTotalPage(1)
			this.props.toggleFetchStatus(true)
			this.props.setPageSize(Number(e.target.innerHTML))

			let response = await this.requestServer({ totalPage: this.props.totalPage, pageSize: Number(e.target.innerHTML) })

			this.props.setUsers(response.data.usersData)
			this.props.setPagesCount(response.data.pagesCount)
			this.props.toggleFetchStatus(false)
		}
	}

	render() {
		return <Users
			{...this.props}
			// usersData={this.props.usersData}
			// pagesCount={this.props.pagesCount}
			// pageSize={this.props.pageSize}
			// totalPage={this.props.totalPage}
			// toggleFollow={this.props.toggleFollow}
			// isFetching={this.props.isFetching}
			swapPage={this.swapPage}
			selectPageSize={this.selectPageSize}
		/>
	}
}


let mapStateToProps = (state) => {
	return {
		usersData: state.usersPage.usersData,
		pagesCount: state.usersPage.pagesCount, // число страниц
		pageSize: state.usersPage.pageSize,     // размер страницы (кол. пользователей)
		totalPage: state.usersPage.totalPage,   // номер текущей страницы
		isFetching: state.usersPage.isFetching  // загрузка файлов
	}
}



export default connect(mapStateToProps, { setUsers, toggleFollow, changeTotalPage, setPagesCount, setPageSize, toggleFetchStatus })(UsersContainer)
