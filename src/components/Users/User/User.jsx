import React from 'react'
import classes from './User.module.css'
import Avatar from '../../common/Avatar/Avatar'
import userPhoto from '../../../assets/images/userPhoto.png'
import { NavLink } from 'react-router-dom'



function User({ myId, user: { userId, followed, avatar, firstName, lastName, location }, ...props }) {
	return (
		< div className={classes.users__item}>
			{
				myId !== userId
					? <button
						className={classes.status_button}
						disabled={props.isFollowingInProgress.some(id => id === userId)}
						onClick={() => props.toggleFollow(userId, followed)}>
						{followed ? 'unfollow' : 'follow'}
					</button>
					: <button className={classes.status_button} disabled>That's me</button>
			}
			< NavLink to={`/profile/${userId}`} className={classes.user__info} >
				<div className={classes.avatar}>
					< Avatar avatar={avatar ? avatar : userPhoto} />
				</div>
				<div className={classes.name}>{`${firstName} ${lastName}`}</div>
				<div className={classes.location}>{location}</div>
			</ NavLink>
		</div >
	)
}

export default User;