import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirectComponent from '../common/HOCs/AuthRedirect/WithAuthRedirectComponent'
import { useParams } from 'react-router-dom'
import Profile from './Profile'
import { getProfile, updateProfile } from '../../redux/thunks/profile-thunk'
import { addNewPost } from '../../redux/actionCreators/profile-action-creator'
import ProfilePreloader from '../common/Preloaders/Profile/ProfilePreloader'


class ProfileContainer extends React.Component {
	componentDidMount() { this.props.getProfile(this.props.params.userId ? this.props.params.userId : this.props.userId) }

	render() {
		if (this.props.isFetching) return <ProfilePreloader />        //fixme
		return <Profile
			{...this.props}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		userId: state.auth.userId,										// Id аккаунта (моего)
		profileData: state.profilePage.profileData,				// Данные профиля
		isFetching: state.profilePage.isFetching					// Boolean идёт ли загрузка страницы               //fixme
	}
}


let WithUrlDataContainerComponent = (props) => <ProfileContainer {...props} params={useParams()} />


export default compose(
	connect(mapStateToProps, { addNewPost, getProfile, updateProfile }),
	withAuthRedirectComponent
)(WithUrlDataContainerComponent)