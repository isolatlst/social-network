import Wallpaper from './Wallpaper/Wallpaper'
import Description from './Description/Description'
import MyPosts from './MyPosts/MyPosts'

function Profile() {
	let avatar__link = 'https://pbs.twimg.com/profile_banners/157025420/1537698290/1500x500';

	return (
		<main>
			< Wallpaper wallpaper__link='https://wallup.net/wp-content/uploads/2019/09/182467-yosemite.jpg' />
			< Description
				name='Kirill Gurin' birth='29.12.2001'
				city='Minsk' education='BSUIR'
				site="github.com/isolatlst"
				avatar__link={avatar__link} />
			< MyPosts avatar__link={avatar__link} />
		</main >
	);
}

export default Profile;