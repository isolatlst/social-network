import { Route, Routes } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import Users from './Users/Users'
import classes from './Messages.module.css'

function Messages(props) {
	return (
		<main className={classes.content}>
			< Users dialogsData={props.messagesPage.dialogsData} />
			<Routes>
				<Route path='/1' element={< Dialog messagesData={props.messagesPage.messagesData} friend__name='Dennis' friend__avatar='https://a.d-cd.net/bEAAAgDEreA-1920.jpg' />} />
			</Routes>
		</main>
	);
}

export default Messages; 