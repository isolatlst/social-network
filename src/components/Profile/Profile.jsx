import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Description from './Description/Description'
import userPhoto from '../../assets/images/userPhoto.png'

function Profile(props) {
	//true - my profile; false - alien profile
	return (props.userId === props.profileData.userId
		? <main className={classes.content}>
			< Description
				wallpaper={props.profileData.wallpaper}
				name={`${props.profileData.firstName} ${props.profileData.lastName}`}
				birth={props.profileData.birth}
				location={props.profileData.location}
				education={props.profileData.education}
				site={props.profileData.site}
				avatar={props.profileData.avatar ? props.profileData.avatar : userPhoto}
				isMineProfile={true}
			/>
			< MyPosts
				avatar={props.profileData.avatar ? props.profileData.avatar : userPhoto}
				newPostText={props.newPostText}
				postsData={props.profileData.postsData}
				addNewPost={props.addNewPost}
				updateNewPost={props.updateNewPost}
				isMineProfile={true}
			/>
		</main>
		: <main className={classes.content}>
			< Description
				wallpaper={props.profileData.wallpaper}
				name={`${props.profileData.firstName} ${props.profileData.lastName}`}
				birth={props.profileData.birth}
				location={props.profileData.location}
				education={props.profileData.education}
				site={props.profileData.site}
				avatar={props.profileData.avatar ? props.profileData.avatar : userPhoto}
				isMineProfile={false}
			/>
			< MyPosts
				avatar={props.profileData.avatar ? props.profileData.avatar : userPhoto}
				postsData={props.profileData.postsData}
				isMineProfile={false}
			/>
		</main>
	)
}

export default Profile;