import React from 'react'
import axios from 'axios'
import classes from './Users.module.css'
import Avatar from '../Profile/Avatar/Avatar'
import userPhoto from '../../assets/images/userPhoto.png'

// function Users(props) {
// 	if (props.usersData.length === 0) {
// 		// axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
// 		// 	props.setUsers(response.data.items)
// 		// })

// 		let config = {
// 			method: 'get',
// 			url: 'http://localhost:3001/users'
// 		}
// 		axios(config)
// 			.then(response => {
// 				props.setUsers(response.data.usersData)
// 			})
// 			.catch(error => console.log(error))
// 	}

// 	return <div className={classes.users}>
// 		{
// 			props.usersData.map(user =>
// 				<div className={classes.users__item} key={user.id}>
// 					<button className={classes.status_button} onClick={() => props.toggleFollow(user.id)}>{user.followed ? 'unfollow' : 'follow'}</button>
// 					<div className={classes.avatar}>
// 						< Avatar avatar={user.avatar ? user.avatar : userPhoto} />
// 					</div>
// 					<div className={classes.name}>{user.name}</div>
// 					<div className={classes.location}>{user.location.country}, {user.location.city}</div>
// 				</div>
// 			)
// 		}
// 	</div >
// }

class Users extends React.Component {
	requestServer = async (params) => {
		let data = await axios.get(`http://localhost:3001/users/?p=${params.totalPage}&count=${params.pageSize}`)
		return data
	}

	async componentDidMount() {
		if (this.props.usersData.length === 0) {
			let response = await this.requestServer({ totalPage: this.props.totalPage, pageSize: this.props.pageSize })

			this.props.setUsers(response.data.usersData)
			this.props.setPagesCount(response.data.pagesCount)
		}
	}
	swapPage = async (e) => {
		if (e.target.localName === 'span') {
			this.props.changeTotalPage(Number(e.target.innerHTML))

			let response = await this.requestServer({ totalPage: Number(e.target.innerHTML), pageSize: this.props.pageSize })

			this.props.setUsers(response.data.usersData)
		}
	}
	selectPageSize = async (e) => {
		if (e.target.localName === 'span') {
			this.props.setPageSize(Number(e.target.innerHTML))

			let response = await this.requestServer({ totalPage: this.props.totalPage, pageSize: Number(e.target.innerHTML) })

			this.props.setUsers(response.data.usersData)
			this.props.setPagesCount(response.data.pagesCount)
		}
	}


	render() {
		let pages = []
		for (let i = 1; i <= this.props.pagesCount; i++) {
			pages.push(i)
		}
		return (
			<div className={classes.users}>
				<div className={classes.navigation}>
					<div className={classes.pageSize} onClick={this.selectPageSize}>
						<span className={this.props.pageSize === 3 ? classes.selectedPageSize : ''}>3</span>
						<span className={this.props.pageSize === 5 ? classes.selectedPageSize : ''}>5</span>
						<span className={this.props.pageSize === 10 ? classes.selectedPageSize : ''}>10</span>
					</div>
					<div className={classes.modulePagination} onClick={this.swapPage}>
						{
							pages.map(page =>
								<span key={Math.random(10000)} className={this.props.totalPage === page ? classes.selectedPaginationLink : ''}> {page}</span>
							)
						}
					</div>
				</div>
				{
					this.props.usersData.map(user =>
						<div className={classes.users__item} key={Math.random(10000)}>
							<button className={classes.status_button} onClick={() => this.props.toggleFollow(user.id)}>{user.followed ? 'unfollow' : 'follow'}</button>
							<div className={classes.avatar}>
								< Avatar avatar={user.avatar ? user.avatar : userPhoto} />
							</div>
							<div className={classes.name}>{user.name}</div>
							<div className={classes.location}>{user.location.country}, {user.location.city}</div>
						</div>
					)
				}
			</div >
		)
	}
}

export default Users;

