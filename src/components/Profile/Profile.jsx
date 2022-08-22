import Avatar from './Avatar/Avatar';
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

function Profile() {
	return (
		<main className={classes.profile}>
			<img className={classes.profile__image} src='https://wallup.net/wp-content/uploads/2019/09/182467-yosemite.jpg' />
			<div className={classes.description}>
				<div className={classes.description__avatar}>
					< Avatar />
				</div>
				<div className={classes.description__name}>Kirill Gurin</div>
				<div className={classes.description__info}>
					<span className={classes.description__text}>Date of birth:</span>
					<span className={classes.description__text}>City:</span>
					<span className={classes.description__text}>Education:</span>
					<span className={classes.description__text}>Web Site:</span>
				</div>
			</div>
			<MyPosts />
		</main >
	);
}

export default Profile;