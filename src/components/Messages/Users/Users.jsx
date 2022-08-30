import User from './User/User';
import classes from './Users.module.css'

function Users(props) {
	let users = props.dialogsData.map(user => < User path_id={user.id} friend__avatar={user.avatar} friend__name={user.name} />)

	return (
		<div className={classes.users}>
			{users}
		</div>
	);
}

export default Users;