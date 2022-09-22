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
	constructor(props) {
		super(props)
		if (this.props.usersData.length === 0) {
			axios.get('http://localhost:3001/users')
				.then(response => {
					this.props.setUsers(response.data.usersData)
				})
				.catch(error => console.log(error))
		}
	}
	getUsers = () => {
		if (this.props.usersData.length === 0) {
			axios.get('http://localhost:3001/users')
				.then(response => {
					this.props.setUsers(response.data.usersData)
				})
				.catch(error => console.log(error))
		}
	}
	render() {
		return <div className={classes.users}>
			{
				this.props.usersData.map(user =>
					<div className={classes.users__item} key={user.id}>
						<button className={classes.status_button} onClick={() => this.props.toggleFollow(user.id)}>{user.followed ? 'unfollow' : 'follow'}</button>
						<div className={classes.avatar}>
							< Avatar avatar={user.avatar ? user.avatar : userPhoto} />
						</div>
						<div className={classes.name}>{user.name}</div>
						<div className={classes.location}>{user.location.country}, {user.location.city}</div>
					</div>
				)
			}
			<button className={classes.newUsersbtn} onClick={this.getUsers}>Show more</button>
		</div >
	}
}

export default Users;

