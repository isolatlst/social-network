import Avatar from '../../../Profile/Avatar/Avatar';
import classes from './User.module.css'
import { NavLink } from 'react-router-dom';

function User(props) {
	return (
		<NavLink to={'/messages/' + props.path_id} className={classes.users__item}>
			< Avatar avatar={props.friend__avatar} />
			<div className={classes.users__name}>{props.friend__name}</div>
		</NavLink>
	);
}

export default User;