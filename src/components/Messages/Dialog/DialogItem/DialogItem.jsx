import Avatar from '../../../Profile/Avatar/Avatar';
import classes from './DialogItem.module.css'

function DialogItem(props) {
	return (
		<div className={classes.dialog__item}>
			< Avatar avatar__link={props.friend_avatar__link} />
			<div className={classes.dialog__name}>{props.friend__name}</div>
			<div className={classes.dialog__text}>{props.friend__message}</div>
		</div>
	);
}

export default DialogItem;