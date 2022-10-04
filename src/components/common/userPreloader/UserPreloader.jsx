import classes from './UserPreloader.module.css'


function UserPreloader() {
	return (
		<div className={classes.userPreloader}>
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

