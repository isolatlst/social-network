import MyPosts from './MyPosts';
import { addPostACreator, updateNewPostACreator } from '../../../redux/actionCreators/profile-action-creator'
import StoreContext from '../../../store-context';

function MyPostsContainer(props) {
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState()
					let addNewPost = () => {
						store.dispatch(addPostACreator(''))
					}
					let updateNewPost = (text) => {
						store.dispatch(updateNewPostACreator(text))
					}
					return (
						< MyPosts
							addNewPost={addNewPost}
							updateNewPost={updateNewPost}
							avatar={state.profilePage.profileData.avatar}
							newPostText={state.profilePage.profileData.newPostText}
							postsData={state.profilePage.profileData.postsData}
						/>
					)
				}
			}
		</StoreContext.Consumer>
	);




	// let state = props.store.getState()

	// let addNewPost = () => {
	// 	props.store.dispatch(addPostACreator(''))
	// }
	// let updateNewPost = (text) => {
	// 	props.store.dispatch(updateNewPostACreator(text))
	// }

	// return (< MyPosts
	// 	addNewPost={addNewPost}
	// 	updateNewPost={updateNewPost}
	// 	avatar={state.profilePage.profileData.avatar}
	// 	newPostText={state.profilePage.profileData.newPostText}
	// 	postsData={state.profilePage.profileData.postsData}
	// />);
}

export default MyPostsContainer;