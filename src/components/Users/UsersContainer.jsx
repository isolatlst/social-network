import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirectComponent from '../common/HOCs/AuthRedirect/WithAuthRedirectComponent'
import { getUsers, toggleFollow } from '../../redux/thunks/users-thunk'
import { getFollowingInProgressSelector, getIsFetchingSelector, getPagesCountSelector, getPagesSizeSelector, getTotalPageSelector, getUsersSelector } from '../../redux/selectors/users-selectors'
import UsersPreloader from '../common/Preloaders/Users/UsersPreloader'
import Users from './Users'


class UsersContainer extends React.Component {
	componentDidMount() { this.props.getUsers(this.props.totalPage, this.props.pageSize) }
	toggleFollowFunc = (userId, isFollowed) => { this.props.toggleFollow(userId, isFollowed) }
	swapPage = (e) => { if (e.target.localName === 'span') this.props.getUsers(Number(e.target.innerHTML), this.props.pageSize) }
	selectPageSize = (e) => { if (e.target.localName === 'span') this.props.getUsers(1, Number(e.target.innerHTML)) }
	render() {
		if (this.props.isFetching) return <UsersPreloader />  //fixme
		return <Users
			{...this.props}
			swapPage={this.swapPage}
			selectPageSize={this.selectPageSize}
			toggleFollowFunc={this.toggleFollowFunc}
		/>
	}
}


let mapStateToProps = (state) => {
	return {
		myId: state.auth.userId,					 								// Id аккаунта (моего)
		usersData: getUsersSelector(state),
		pagesCount: getPagesCountSelector(state),
		pageSize: getPagesSizeSelector(state),
		totalPage: getTotalPageSelector(state),
		isFollowingInProgress: getFollowingInProgressSelector(state),
		isFetching: getIsFetchingSelector(state),
	}
}


export default compose(
	connect(mapStateToProps, { toggleFollow, getUsers }),
	withAuthRedirectComponent
)(UsersContainer)