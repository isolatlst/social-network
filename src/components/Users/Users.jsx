import React from 'react'
import classes from './Users.module.css'
import User from './User/User'
import Paginator from '../common/Paginator/Paginator'



function Users({ myId, usersData, pagesCount, pageSize, totalPage, ...props }) {
	return (
		<main className={classes.content}>
			< Paginator pagesCount={pagesCount} totalPage={totalPage} pageSize={pageSize}
				swapPage={props.swapPage} selectPageSize={props.selectPageSize} />
			{
				usersData.map((user, index) =>
					<User key={index} myId={myId} user={user} toggleFollow={props.toggleFollow} isFollowingInProgress={props.isFollowingInProgress} />
				)
			}
		</main >
	)
}

export default Users;

