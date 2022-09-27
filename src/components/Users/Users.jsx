import React from 'react'
import classes from './Users.module.css'
import Avatar from '../Profile/Avatar/Avatar'
import userPhoto from '../../assets/images/userPhoto.png'
import UserPreloader from '../common/userPreloader/User-preloader'

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

function Users(props) {
	let pages = []
	for (let i = 1; i <= props.pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className={classes.users}>
			{
				<div className={classes.navigation}>
					<div className={classes.pageSize} onClick={props.selectPageSize}>
						<span className={props.pageSize === 3 ? classes.selectedPageSize : ''}>3</span>
						<span className={props.pageSize === 5 ? classes.selectedPageSize : ''}>5</span>
						<span className={props.pageSize === 10 ? classes.selectedPageSize : ''}>10</span>
					</div>
					<div className={classes.modulePagination} onClick={props.swapPage}>
						{
							pages.map(page =>
								<span key={Math.random(10000)} className={props.totalPage === page ? classes.selectedPaginationLink : ''}> {page}</span>
							)
						}
					</div>
				</div>
			}
			{
				props.isFetching ? <UserPreloader />
					: props.usersData.map(user =>
						<div className={classes.users__item} key={Math.random(10000)}>
							<button className={classes.status_button} onClick={() => props.toggleFollow(user.id)}>{user.followed ? 'unfollow' : 'follow'}</button>
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

export default Users;

