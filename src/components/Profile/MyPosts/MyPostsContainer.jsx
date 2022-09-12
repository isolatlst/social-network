import MyPosts from './MyPosts';
import { addPostACreator, updateNewPostACreator } from '../../../redux/actionCreators/profile-action-creator'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		avatar: state.profilePage.profileData.avatar,
		newPostText: state.profilePage.profileData.newPostText,
		postsData: state.profilePage.profileData.postsData
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addNewPost: () => { dispatch(addPostACreator('')) },
		updateNewPost: (text) => { dispatch(updateNewPostACreator(text)) }
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;