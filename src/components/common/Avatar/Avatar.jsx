import { useState } from 'react'
import { onDoubleClick } from '../custom-events/custom-events'
import classes from './Avatar.module.css'
// import userPhoto from '../../../assets/images/userPhoto.png'
import userPhoto from '../../../assets/images/zxc-cat.gif'

function Avatar({ avatar, scalable = false }) {
	const [isScaling, setScaling] = useState(false)
	const scaleAvatar = (e) => onDoubleClick(setScaling, true)

	return (
		<img onClick={scalable ? scaleAvatar : null} onBlur={() => setScaling(false)} tabIndex={100}
			className={`${classes.avatar} ${scalable && isScaling ? classes.avatarScale : ''}`} src={avatar ? avatar : userPhoto} alt="(*_*)" />
	)
}

export default Avatar;