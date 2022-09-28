import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Profile from './Profile'
import { addNewPost, updateNewPost, setUserProfile } from '../../redux/actionCreators/profile-action-creator'
import UserPreloader from '../common/userPreloader/UserPreloader'


class ProfileContainer extends React.Component {
	requestServer = async (id) => await axios.get(`http://localhost:3001/profile/${id}`)


	async componentDidMount() {
		// this.props.toggleFetchStatus(true)
		let response = await this.requestServer(2)
		// console.log(response.data.profileData);

		this.props.setUserProfile(response.data.profileData)

		// this.props.toggleFetchStatus(false)
	}

	render() {
		if (JSON.stringify(this.props.profileData) === '{}') {
			return <UserPreloader />
		}
		return <Profile {...this.props} />
	}
}

let mapStateToProps = (state) => {
	return {
		profileData: state.profilePage.profileData,
		newPostText: state.profilePage.newPostText
	}
}

export default connect(mapStateToProps, { addNewPost, updateNewPost, setUserProfile })(ProfileContainer)

