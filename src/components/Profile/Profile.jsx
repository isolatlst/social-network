import Avatar from './Avatar/Avatar'
import Wallpaper from './Wallpaper/Wallpaper'
import Description from './Description/Description'
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

function Profile() {
	return (
		<main className={classes.profile}>
			< Wallpaper />
			<div className={classes.description}>
				<div className={classes.description__avatar}>
					< Avatar />
				</div>
				< Description name='Kirill Gurin' birth='29.12.2001' city='Minsk' education='BSUIR' site="github.com/isolatlst" />
			</div>
			<MyPosts />
		</main >
	);
}

export default Profile;