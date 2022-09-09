import { Route, Routes } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import Users from './Users/Users'
import classes from './Messages.module.css'

function Messages(props) {
	return (
		<main className={classes.content}>
			< Users
				dialogsData={props.messagesPage.dialogsData} />
			< Dialog
				dispatch={props.dispatch}
				messagesData={props.messagesPage.messagesData}
				newMessageData={props.messagesPage.newMessageData}
				friend__name='Dennis'
				friend__avatar='https://a.d-cd.net/bEAAAgDEreA-1920.jpg' />

		</main>
	);
}

export default Messages; 