import React from 'react'
import classes from './Users.module.css'
import Avatar from '../common/Avatar/Avatar'
import userPhoto from '../../assets/images/userPhoto.png'
import { NavLink } from 'react-router-dom'



function Users(props) {
	let pages = []
	for (let i = 1; i <= props.pagesCount; i++) {
		pages.push(i)
	}

	return (
		<main className={classes.content}>
			{
				<div className={classes.navigation}>
					<div className={classes.modulePagination} onClick={props.swapPage}>
						{
							pages.map(page =>
								<span key={Math.random(10000)} className={props.totalPage === page ? classes.selectedPaginationLink : ''}> {page}</span>
							)
						}
					</div>
					<div className={classes.pageSize} onClick={props.selectPageSize}>
						<span className={props.pageSize === 3 ? classes.selectedPageSize : ''}>3</span>
						<span className={props.pageSize === 5 ? classes.selectedPageSize : ''}>5</span>
						<span className={props.pageSize === 10 ? classes.selectedPageSize : ''}>10</span>
					</div>
				</div>
			}
			{
				props.usersData.map(user =>
					<div className={classes.users__item} key={Math.random(10000)}>
						{
							props.myId !== user.userId
								? <button
									className={classes.status_button}
									disabled={props.isFollowingInProgress.some(id => id === user.userId)}
									onClick={() => props.toggleFollowFunc(user.userId, user.followed)}>
									{user.followed ? 'unfollow' : 'follow'}
								</button>
								: <button className={classes.status_button} disabled>That's me</button>
						}
						<NavLink to={'/profile/' + user.userId} className={classes.user__info}>
							<div className={classes.avatar}>
								< Avatar avatar={user.avatar ? user.avatar : userPhoto} />
							</div>
							<div className={classes.name}>{`${user.firstName} ${user.lastName}`}</div>
							<div className={classes.location}>{user.location}</div>
						</NavLink>
					</div>
				)
			}
		</main >
	)
}

export default Users;

