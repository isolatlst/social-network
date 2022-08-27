import classes from './Avatar.module.css'

function Avatar(props) {
	return (
		<img className={classes.avatar} src={props.avatar} alt="(*_*)" />
	)
}

export default Avatar;