import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addNewPost, updateNewPost } from '../../redux/actionCreators/profile-action-creator'
import Profile from './Profile'
import ProfilePreloader from '../common/profilePreloader/ProfilePreloader'
import { getProfile } from '../../redux/thunks/profile-thunk'


class ProfileContainer extends React.Component {
	componentDidMount() {
		if (this.props.auth) {
			let userId = this.props.params.userId ? this.props.params.userId : this.props.userId
			this.props.getProfile(userId)
		}
	}
	addNewPost = () => { this.props.addNewPost() }
	updateNewPost = (e) => { this.props.updateNewPost(e.target.value) }

	render() {
		if (!this.props.auth) {
			return <div>Please auth</div>
		}
		if (JSON.stringify(this.props.profileData) === '{}' || this.props.isFetching) {
			return <ProfilePreloader />
		}
		return <Profile
			{...this.props}
			addNewPost={this.addNewPost}
			updateNewPost={this.updateNewPost}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		auth: state.auth.authStatus,  								// boolean авторизован ли пользователь
		userId: state.auth.userId,										// Id аккаунта (моего)
		profileId: state.profilePage.profileData.userId,		// Id профиля (может быть как моего, так и чужого)
		profileData: state.profilePage.profileData,				// Данные профиля
		newPostText: state.profilePage.newPostText,				// Предварительные данные поста
		isFetching: state.profilePage.isFetching					// Boolean идёт ли загрузка страницы
	}
}


let WithUrlDataContainerComponent = (props) => <ProfileContainer {...props} params={useParams()} />


export default connect(mapStateToProps, {
	addNewPost,																// Добавить новый пост в state.profilePage.postsData
	updateNewPost,															// Обновить данные в state.profilePage.newPostText
	getProfile																// Thunk получить профиль
})(WithUrlDataContainerComponent)

