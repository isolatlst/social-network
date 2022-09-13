import Users from './Users'
import { setUsersACreator, toggleFollowToUserACreator } from '../../redux/actionCreators/users-action-creator'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		usersData: state.usersPage.usersData,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (usersData) => { dispatch(setUsersACreator(usersData)) },
		toggleFollow: (userId) => { dispatch(toggleFollowToUserACreator(userId)) }
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;