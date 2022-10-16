import classes from './UsersPreloader.module.css'


function UserPreloader() {
	return (
		<div className={classes.usersPreloader}>
			< div className={classes.item} >
				<div className={`${classes.button} ${classes.animatePreloader}`}></div>
				<div className={`${classes.avatar} ${classes.animatePreloader}`}></div>
				<div className={`${classes.name} ${classes.animatePreloader}`}></div>
				<div className={`${classes.location} ${classes.animatePreloader}`}></div>
			</div >
			< div className={classes.item} >
				<div className={`${classes.button} ${classes.animatePreloader}`}></div>
				<div className={`${classes.avatar} ${classes.animatePreloader}`}></div>
				<div className={`${classes.name} ${classes.animatePreloader}`}></div>
				<div className={`${classes.location} ${classes.animatePreloader}`}></div>
			</div>
			< div className={classes.item} >
				<div className={`${classes.button} ${classes.animatePreloader}`}></div>
				<div className={`${classes.avatar} ${classes.animatePreloader}`}></div>
				<div className={`${classes.name} ${classes.animatePreloader}`}></div>
				<div className={`${classes.location} ${classes.animatePreloader}`}></div>
			</div>
		</div >
	)
}

export default UserPreloader;

