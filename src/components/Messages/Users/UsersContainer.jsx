import Users from './Users';
import User from './User/User';

function UsersContainer(props) {
	let state = props.store.getState().messagesPage.dialogsData
	let users = state.map(user => < User path_id={user.id} friend__avatar={user.avatar} friend__name={user.name} />)

	return (< Users users={users} />);
}

export default UsersContainer;