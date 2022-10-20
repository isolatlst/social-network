import classes from './Avatar.module.css'
// import userPhoto from '../../../assets/images/userPhoto.png'
import userPhoto from '../../../assets/images/zxc-cat.gif'

function Avatar({ avatar }) {
	return (
		<img className={classes.avatar} src={avatar ? avatar : userPhoto} alt="(*_*)" />
	)
}

export default Avatar;