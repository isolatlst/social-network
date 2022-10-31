import React, {useState} from 'react'
import {onDoubleClick} from '../custom-events/custom-events'
import classes from './Avatar.module.css'
import userPhoto from '../../../assets/images/zxc-cat.gif'

type PropsType = {
    avatar: string
    scalable?: boolean
}

const Avatar: React.FC<PropsType> = ({avatar, scalable = false}) => {
    const [isScaling, setScaling] = useState(false)
    const scaleAvatar = () => onDoubleClick(setScaling, true)

    return (
        <div className={`${classes.avatar} ${scalable && isScaling ? classes.avatarScale : ''}`}
             onClick={scalable ? scaleAvatar : undefined} onBlur={() => setScaling(false)} tabIndex={100}>
            <img src={avatar ? avatar : userPhoto} alt="(*_*)"/>
        </div>
    )
}

export default Avatar;