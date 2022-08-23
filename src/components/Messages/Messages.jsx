import Dialog from './Dialog/Dialog';
import classes from './Messages.module.css'
import Users from './Users/Users';

function Messages() {
	return (
		<main className={classes.content}>
			< Users />
			< Dialog friend__name='Dima' friend_avatar__link='https://a.d-cd.net/bEAAAgDEreA-1920.jpg' />
		</main>
	);
}

export default Messages;