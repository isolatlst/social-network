import Description from './Description/Description'
import MyPosts from './MyPosts/MyPosts'

function Profile(props) {
	return (
		<main>
			< Description
				wallpaper={props.profilePage.profileData.wallpaper}
				name={props.profilePage.profileData.name} birth={props.profilePage.profileData.birth}
				city={props.profilePage.profileData.city} education={props.profilePage.profileData.education}
				site={props.profilePage.profileData.site}
				avatar={props.profilePage.profileData.avatar} />
			< MyPosts
				avatar={props.profilePage.profileData.avatar}
				postsData={props.profilePage.profileData.postsData}
				newPostText={props.profilePage.profileData.newPostText}
				dispatch={props.dispatch} />
		</main >
	);
}

export default Profile;