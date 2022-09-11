import classes from './Profile.module.css'
import DescriptionContainer from './Description/DescriptionContainer'
import MyPostsContainer from './MyPosts/MyPostsContainer'

function Profile(props) {
	return (
		<main className={classes.content}>
			{/* < DescriptionContainer
			// store={props.store}
			/> */}
			< MyPostsContainer
			// store={props.store}
			/>
		</main >
	);
}

export default Profile;