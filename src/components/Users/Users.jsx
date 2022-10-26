import React from 'react'
import User from './User/User'



function Users({ myId, usersData, ...props }) {
	return (
		<>
			{
				usersData.map(user =>
					<User key={user.userId} myId={myId} user={user} toggleFollow={props.toggleFollow} isFollowingInProgress={props.isFollowingInProgress} />
				)
			}
		</>
	)
}

export default Users;

