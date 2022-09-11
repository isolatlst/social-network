import classes from './Users.module.css'

function Users(props) {
	return (
		<div className={classes.users}>
			{props.users}
		</div>
	);
}

export default Users;