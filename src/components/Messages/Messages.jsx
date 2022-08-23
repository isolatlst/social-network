import { Route, Routes } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import Users from './Users/Users'
import classes from './Messages.module.css'

function Messages() {
	return (
		<main className={classes.content}>
			< Users />
			<Routes>
				<Route path='/1' element={< Dialog friend__name='Dennis' friend_avatar__link='https://a.d-cd.net/bEAAAgDEreA-1920.jpg' />} />
			</Routes>
		</main>
	);
}

export default Messages;