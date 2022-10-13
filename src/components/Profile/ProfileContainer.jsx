import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirectComponent from '../common/HOC AuthRedirect/WithAuthRedirectComponent'
import { useParams } from 'react-router-dom'
import Profile from './Profile'
import { getProfile, updateProfile } from '../../redux/thunks/profile-thunk'
import { addNewPost, updateNewPost } from '../../redux/actionCreators/profile-action-creator'
import ProfilePreloader from '../common/profilePreloader/ProfilePreloader'


class ProfileContainer extends React.Component {
	componentDidMount() { this.props.getProfile(this.props.params.userId ? this.props.params.userId : this.props.userId) }
	addNewPost = () => { this.props.addNewPost() }
	updateNewPost = (e) => { this.props.updateNewPost(e.target.value) }
	render() {
		if (this.props.isFetching) return <ProfilePreloader />        //fixme
		return <Profile
			{...this.props}
			addNewPost={this.addNewPost}
			updateNewPost={this.updateNewPost}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		userId: state.auth.userId,										// Id аккаунта (моего)
		profileData: state.profilePage.profileData,				// Данные профиля
		newPostText: state.profilePage.newPostText,				// Предварительные данные поста
		isFetching: state.profilePage.isFetching					// Boolean идёт ли загрузка страницы               //fixme
	}
}


let WithUrlDataContainerComponent = (props) => <ProfileContainer {...props} params={useParams()} />


export default compose(
	connect(mapStateToProps, { addNewPost, updateNewPost, getProfile, updateProfile }),
	withAuthRedirectComponent
)(WithUrlDataContainerComponent)