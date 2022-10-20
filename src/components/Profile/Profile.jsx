import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Description from './Description/Description'

function Profile(props) {
	// props.userId === props.profileId
	//true - my profile; false - alien profile
	return (
		<main className={classes.content}>
			< Description
				userId={props.userId}
				isMineProfile={props.userId === props.profileId}
				updateProfile={props.updateProfile}
				avatar={props.avatar}

				wallpaper={props.wallpaper}
				name={props.name}
				birth={props.birth}
				location={props.location}
				education={props.education}
				site={props.site}
			/>
			< MyPosts
				userId={props.userId}
				isMineProfile={props.userId === props.profileId}
				updateProfile={props.updateProfile}
				avatar={props.avatar}

				postsData={props.postsData}
				deleteProfilePost={props.deleteProfilePost}
			/>
		</main>
	)
}

export default Profile;