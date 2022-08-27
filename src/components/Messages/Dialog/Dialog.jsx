import classes from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem';
import SendMessage from './SendMessage/SendMessage'

function Dialog(props) {
	let friend__name = props.friend__name
	let friend__avatar = props.friend__avatar

	let messagesData = [
		{ id: 1, date: '19:21 23/08/2022', sender: 'friend', message: 'Привет' },
		{ id: 2, date: '19:22 23/08/2022', sender: 'friend', message: 'Как дела' },
		{ id: 3, date: '19:22 23/08/2022', sender: 'friend', message: 'Проверка длинного сообщения на всякие глюки и тому подобное. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quos ipsam dignissimos, laudantium facilis minima, repudiandae quas consequatur atque unde, fugiat recusandae ea possimus cupiditate itaque consectetur earum neque? Vero.' },
		{ id: 4, date: '19:24 23/08/2022', sender: 'friend', message: 'У меня все хорошо' },
		{ id: 5, date: '19:28 23/08/2022', sender: 'me', message: 'Привет, у меня тоже' }
	]

	let messages = messagesData.map(message => < DialogItem friend__name={friend__name} friend__avatar={friend__avatar} friend__message={message.message} />)

	return (
		<div className={classes.dialog}>
			<div className={classes.dialog__items}>
				{messages}
			</div>
			<SendMessage />
		</div>
	);
}

export default Dialog;