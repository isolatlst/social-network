import React from 'react'
import User from './User/User'
import {UserType} from "../../redux/reducers/users-reducer";

type PropsType = {
    myId: number
    usersData: Array<UserType>
    isFollowingInProgress: Array<number>
    toggleFollow: (userId: number, followed: boolean) => void
}

const Users: React.FC<PropsType> = ({myId, usersData, ...props}) => {
    return (
        <>
            {
                usersData.map(user =>
                    <User key={user.userId} myId={myId} user={user} toggleFollow={props.toggleFollow} isFollowingInProgress={props.isFollowingInProgress}/>
                )
            }
        </>
    )
}

export default Users;

