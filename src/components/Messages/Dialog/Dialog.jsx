import classes from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem';

function Dialog(props) {
	let friend__name = props.friend__name
	let friend_avatar__link = props.friend_avatar__link

	return (
		<div className={classes.dialog}>
			< DialogItem friend__name={friend__name} friend_avatar__link={friend_avatar__link} friend__message='Привет' />
			< DialogItem friend__name={friend__name} friend_avatar__link={friend_avatar__link} friend__message='Как дела' />
			< DialogItem friend__name={friend__name} friend_avatar__link={friend_avatar__link} friend__message='Проверка длинного сообщения на всякие глюки и тому подобное. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quos ipsam dignissimos, laudantium facilis minima, repudiandae quas consequatur atque unde, fugiat recusandae ea possimus cupiditate itaque consectetur earum neque? Vero.' />
			< DialogItem friend__name={friend__name} friend_avatar__link={friend_avatar__link} friend__message='У меня все хорошо' />
		</div>
	);
}

export default Dialog;