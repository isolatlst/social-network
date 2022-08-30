import { Route, Routes } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import Users from './Users/Users'
import classes from './Messages.module.css'

function Messages(props) {

	return (
		<main className={classes.content}>
			< Users usersData={props.usersData} />
			<Routes>
				<Route path='/1' element={< Dialog friend__name='Dennis' friend__avatar='https://a.d-cd.net/bEAAAgDEreA-1920.jpg' />} />
			</Routes>
		</main>
	);
}

export default Messages;