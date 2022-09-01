import Description from './Description/Description'
import MyPosts from './MyPosts/MyPosts'

function Profile(props) {
	return (
		<main>
			< Description
				wallpaper={props.state.profileData.wallpaper}
				name={props.state.profileData.name} birth={props.state.profileData.birth}
				city={props.state.profileData.city} education={props.state.profileData.education}
				site={props.state.profileData.site}
				avatar={props.state.profileData.avatar} />
			< MyPosts
				avatar={props.state.profileData.avatar}
				postsData={props.state.profileData.postsData}
				addPost={props.addPost} />
		</main >
	);
}

export default Profile;