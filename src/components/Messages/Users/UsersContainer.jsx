import Users from './Users';
import User from './User/User';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
	return {
		users: state.messagesPage.dialogsData.map(user => < User path_id={user.id} friend__avatar={user.avatar} friend__name={user.name} />)
	}
}
let mapDispatchToProps = (dispatch) => ({})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)



export default UsersContainer;