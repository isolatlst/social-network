import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirectComponent from '../common/HOCs/AuthRedirect/WithAuthRedirectComponent'
import { useParams } from 'react-router-dom'
import Profile from './Profile'
import { getProfile, updateProfile, deleteProfilePost } from '../../redux/thunks/profile-thunk'
import ProfilePreloader from '../common/Preloaders/Profile/ProfilePreloader'
import { useEffect } from 'react'


function ProfileContainer({ isFetching, ...props }) {
	let { userId } = useParams()
	useEffect(() => {
		props.getProfile(userId)
	}, [userId]) // eslint-disable-line react-hooks/exhaustive-deps

	return isFetching
		? <ProfilePreloader />
		: <Profile {...props} />
}

let mapStateToProps = (state) => {
	return {
		userId: state.auth.userId,										// Id аккаунта (моего)
		profileId: state.profilePage.userId,						// Id профиля
		wallpaper: state.profilePage.wallpaper,
		name: `${state.profilePage.firstName} ${state.profilePage.lastName}`,
		birth: state.profilePage.birth,
		location: state.profilePage.location,
		education: state.profilePage.education,
		site: state.profilePage.site,
		avatar: state.profilePage.avatar,
		postsData: state.profilePage.postsData,
		isFetching: state.profilePage.isFetching
	}
}

export default compose(
	connect(mapStateToProps, { getProfile, updateProfile, deleteProfilePost }),
	withAuthRedirectComponent
)(ProfileContainer)