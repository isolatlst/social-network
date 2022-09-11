import classes from './Messages.module.css'
import UsersContainer from './Users/UsersContainer'
import DialogContainer from './Dialog/DialogContainer'

function Messages(props) {
	return (
		<main className={classes.content}>
			{/* <UsersContainer store={props.store} /> */}
			<DialogContainer
			// store={props.store} 
			/>
		</main>
	);
}

export default Messages; 