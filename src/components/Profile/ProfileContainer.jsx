import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addNewPost, updateNewPost, setUserProfile, toggleFetchStatus } from '../../redux/actionCreators/profile-action-creator'
import { toggleAuthStatus } from '../../redux/actionCreators/auth-action-creator'
import { toggleFollow } from '../../redux/actionCreators/users-action-creator'
import Profile from './Profile'
import ProfilePreloader from '../common/profilePreloader/ProfilePreloader'


class ProfileContainer extends React.Component {
	requestServer = async (userId) => await axios.get(`/profile/${userId}`)

	async componentDidMount() {
		if (this.props.auth) {
			let userId = this.props.params.userId ? this.props.params.userId : this.props.userId
			this.props.toggleFetchStatus(true)
			let response = await this.requestServer(userId)
			this.props.setUserProfile(response.data.profileData)
		}
	}

	render() {
		if (!this.props.auth) {
			return <div>Please auth</div>
		}
		if (JSON.stringify(this.props.profileData) === '{}' || this.props.isFetching) {
			return <ProfilePreloader />
		}
		return <Profile {...this.props} />
	}
}

let mapStateToProps = (state) => {
	return {
		auth: state.auth.authStatus,
		userId: state.auth.userId,
		profileId: state.profilePage.profileData.userId,
		profileData: state.profilePage.profileData,
		newPostText: state.profilePage.newPostText,
		isFetching: state.profilePage.isFetching
	}
}


let WithUrlDataContainerComponent = (props) => <ProfileContainer {...props} params={useParams()} />


export default connect(mapStateToProps, { addNewPost, updateNewPost, setUserProfile, toggleAuthStatus, toggleFetchStatus, toggleFollow })(WithUrlDataContainerComponent)

