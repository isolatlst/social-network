import React from 'react'
import User from './User/User'



function Users({ myId, usersData, ...props }) {
	return (
		<>
			{
				usersData.map((user, index) =>
					<User key={index} myId={myId} user={user} toggleFollow={props.toggleFollow} isFollowingInProgress={props.isFollowingInProgress} />
				)
			}
		</>
	)
}

export default Users;

