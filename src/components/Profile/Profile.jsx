import classes from './Profile.module.css'
import DescriptionContainer from './Description/DescriptionContainer'
import MyPostsContainer from './MyPosts/MyPostsContainer'

function Profile() {
	return (
		<main className={classes.content}>
			< DescriptionContainer />
			< MyPostsContainer />
		</main >
	);
}

export default Profile;