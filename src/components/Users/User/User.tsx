import React from 'react'
import classes from './User.module.css'
import Avatar from '../../common/Avatar/Avatar'
import {NavLink} from 'react-router-dom'
import {UserType} from "../../../types/state-types";

type PropsType = {
    myId: number
    user: UserType
    isFollowingInProgress: Array<number>
    toggleFollow: (userId: number, followed: boolean) => void
}

const User: React.FC<PropsType> = ({myId, user: {userId, followed, avatar, firstName, lastName, location}, ...props}) => {
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
            < NavLink to={`/profile/${userId}`} className={classes.user__info}>
                < Avatar avatar={avatar}/>
                <div className={classes.name}>{`${firstName} ${lastName}`}</div>
                <div className={classes.location}>{location}</div>
            </ NavLink>
        </div>
    )
}

export default User;