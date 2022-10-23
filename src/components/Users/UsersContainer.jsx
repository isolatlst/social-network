import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirectComponent from '../common/HOCs/AuthRedirect/WithAuthRedirectComponent'
import { getUsers, toggleFollow } from '../../redux/thunks/users-thunk'
import { getFollowingInProgressSelector, getIsFetchingSelector, getPagesCountSelector, getPagesSizeSelector, getTotalPageSelector, getUsersSelector } from '../../redux/selectors/users-selectors'
import UsersPreloader from '../common/Preloaders/Users/UsersPreloader'
import classes from './Users.module.css'
import Users from './Users'
import Paginator from '../common/Paginator/Paginator'
import { useEffect } from 'react'


function UsersContainer({ isFetching, ...props }) {
	useEffect(() => {
		props.getUsers(props.totalPage, props.pageSize)
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	const swapPage = (page) => { props.getUsers(page, props.pageSize) }
	const selectPageSize = (e) => { if (e.target.localName === 'span') props.getUsers(props.totalPage, Number(e.target.innerHTML)) }

	return <main className={classes.content}>
		{
			isFetching ?
				props.pagesCount
					? <>
						< Paginator pagesCount={props.pagesCount} totalPage={props.totalPage} pageSize={props.pageSize}
							swapPage={swapPage} selectPageSize={selectPageSize} />
						<UsersPreloader />
					</>
					: <UsersPreloader />
				: <>
					< Paginator pagesCount={props.pagesCount} totalPage={props.totalPage} pageSize={props.pageSize}
						swapPage={swapPage} selectPageSize={selectPageSize} />
					<Users {...props} />
				</>
		}
	</main>
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