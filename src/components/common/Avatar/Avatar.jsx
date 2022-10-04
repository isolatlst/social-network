import classes from './Avatar.module.css'
import userPhoto from '../../../assets/images/userPhoto.png'

function Avatar(props) {
	return (
		<img className={classes.avatar} src={props.avatar ? props.avatar : userPhoto} alt="(*_*)" />
	)
}

export default Avatar;