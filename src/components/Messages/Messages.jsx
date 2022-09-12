import classes from './Messages.module.css'
import UsersContainer from './Users/UsersContainer'
import DialogContainer from './Dialog/DialogContainer'

function Messages() {
	return (
		<main className={classes.content}>
			<UsersContainer />
			<DialogContainer />
		</main>
	);
}

export default Messages; 