import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Description from './Description/Description'

function Profile(props) {
	//true - my profile; false - alien profile

	return (props.userId === props.profileId
		? <main className={classes.content}>
			< Description
				isMineProfile={true}
				updateProfile={props.updateProfile}
				wallpaper={props.wallpaper}
				name={props.name}
				birth={props.birth}
				location={props.location}
				education={props.education}
				site={props.site}
				avatar={props.avatar}
			/>
			< MyPosts
				isMineProfile={true}
				avatar={props.avatar}
				postsData={props.postsData}
				addNewPost={props.addNewPost}
				deletePost={props.deletePost}
			/>
		</main>
		: <main className={classes.content}>
			< Description
				wallpaper={props.wallpaper}
				name={props.name}
				birth={props.birth}
				location={props.location}
				education={props.education}
				site={props.site}
				avatar={props.avatar}
				isMineProfile={false}
			/>
			< MyPosts
				avatar={props.avatar}
				postsData={props.postsData}
				isMineProfile={false}
			/>
		</main>
	)
}

export default Profile;