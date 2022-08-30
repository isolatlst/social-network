import Wallpaper from './Wallpaper/Wallpaper'
import Description from './Description/Description'
import MyPosts from './MyPosts/MyPosts'

function Profile(props) {
	return (
		<main>
			< Wallpaper wallpaper={props.profileData.wallpaper} />
			< Description
				name={props.profileData.name} birth={props.profileData.birth}
				city={props.profileData.city} education={props.profileData.education}
				site={props.profileData.site}
				avatar={props.profileData.avatar} />
			< MyPosts avatar={props.profileData.avatar} postsData={props.profileData.postsData} />
		</main >
	);
}

export default Profile;