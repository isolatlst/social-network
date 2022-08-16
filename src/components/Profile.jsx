import classes from './Profile.module.css'

function Profile() {
	return (
		<main className={classes.profile}>
			<img className={classes.profile__image} src='https://wallup.net/wp-content/uploads/2019/09/182467-yosemite.jpg' />
			<div className={classes.profileDescription}>
				<div className={classes.profileDescription__avatar}>
					<img src="" alt="Avatar" />
				</div>
				<div className={classes.profileDescription__name}>Kirill Gurin</div>
				<div className={classes.profileDescription__info}>
					<span className={classes.profileDescription__text}>Date of birth:</span>
					<span className={classes.profileDescription__text}>City:</span>
					<span className={classes.profileDescription__text}>Education:</span>
					<span className={classes.profileDescription__text}>Web Site:</span>
				</div>
			</div>
			<div className={classes.profilePosts}>
				<div className={`${classes.profilePosts__item} ${classes.newPost}`}></div>
				<div className={classes.profilePosts__item}>Post 1</div>
				<div className={classes.profilePosts__item}>Post 2</div>
			</div>
		</main >
	);
}

export default Profile;