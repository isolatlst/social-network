import Avatar from '../../../Profile/Avatar/Avatar';
import classes from './User.module.css'

function User(props) {
	return (
		<div className={classes.users__item}>
			< Avatar avatar__link={props.avatar__link} />
			<div className={classes.users__name}>{props.user__name}</div>
		</div>
	);
}

export default User;