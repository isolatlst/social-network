import classes from './ProfilePreloader.module.css'


function ProfilePreloader() {
	return (
		<div>
			<div className={classes.description}>
				<div className={`${classes.wallpaper} ${classes.animatePreloader}`}></div>
				<div className={classes.description__body}>
					<div className={`${classes.avatar} ${classes.animatePreloader}`}></div>
					<div className={classes.description__info}>
						<div className={`${classes.description__name} ${classes.animatePreloader}`}></div>
						<div className={`${classes.description__text} ${classes.animatePreloader}`}></div>
						<div className={`${classes.description__text} ${classes.animatePreloader}`}></div>
						<div className={`${classes.description__text} ${classes.animatePreloader}`}></div>
						<div className={`${classes.description__text} ${classes.animatePreloader}`}></div>
					</div>
				</div>
			</div>
			<div className={classes.profilePosts}>
				<div className={classes.title}>My posts</div>
				<div className={classes.posts__list}>
					<div className={classes.posts__item}>
						<span className={classes.animatePreloader}></span>
						<div className={classes.animatePreloader}></div>
					</div>
					<div className={classes.posts__item}>
						<span className={classes.animatePreloader}></span>
						<div className={classes.animatePreloader}></div>
					</div>
					<div className={classes.posts__item}>
						<span className={classes.animatePreloader}></span>
						<div className={classes.animatePreloader}></div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default ProfilePreloader;

