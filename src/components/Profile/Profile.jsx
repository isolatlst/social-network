import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import Description from './Description/Description';

function Profile(props) {
	return (
		<main className={classes.content}>
			< Description
				wallpaper={props.profileData.wallpaper}
				name={props.profileData.name}
				birth={props.profileData.birth}
				location={props.profileData.location}
				education={props.profileData.education}
				site={props.profileData.site}
				avatar={props.profileData.avatar}
			/>
			< MyPosts
				avatar={props.profileData.avatar}
				newPostText={props.newPostText}
				postsData={props.profileData.postsData}
				addNewPost={props.addNewPost}
				updateNewPost={props.updateNewPost}
			/>
		</main >
	);
}

export default Profile;