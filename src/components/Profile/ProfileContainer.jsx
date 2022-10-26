import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirectComponent from '../common/HOCs/AuthRedirect/WithAuthRedirectComponent'
import { useParams } from 'react-router-dom'
import Profile from './Profile'
import { getProfile, updateProfile, deleteProfilePost, addProfilePost } from '../../redux/thunks/profile-thunk'
import ProfilePreloader from '../common/Preloaders/Profile/ProfilePreloader'
import { useState } from 'react'
import ProfileForm from './ProfileForm/ProfileForm'


function ProfileContainer({ isFetching, ...props }) {
	const [editMode, setEditMode] = useState(false)
	const { userId } = useParams()

	useEffect(() => {
		props.getProfile(userId, props.myId)
	}, [userId]) // eslint-disable-line react-hooks/exhaustive-deps

	return isFetching
		? <ProfilePreloader />
		: editMode
			? <ProfileForm setEditMode={setEditMode}
				avatar={props.avatar}
				wallpaper={props.wallpaper}
				birth={props.birth}
				location={props.location}
				education={props.education}
				site={props.site}
				updateProfile={props.updateProfile}
			/>
			: <Profile {...props} setEditMode={setEditMode} />
}

let mapStateToProps = (state) => {
	return {
		myId: state.auth.userId,										// Id аккаунта (моего)
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
	connect(mapStateToProps, { getProfile, updateProfile, deleteProfilePost, addProfilePost }),
	withAuthRedirectComponent
)(ProfileContainer)