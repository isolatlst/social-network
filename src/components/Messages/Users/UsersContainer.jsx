import Users from './Users';
import User from './User/User';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		users: state.messagesPage.dialogsData.map(user => < User key={user.id} path_id={user.id} friend__avatar={user.avatar} friend__name={user.name} />)
	}
}

export default connect(mapStateToProps, {})(Users);