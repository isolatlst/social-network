import Avatar from '../../common/Avatar/Avatar'
import Wallpaper from './Wallpaper/Wallpaper'
import classes from './Description.module.css'

function Description(props) { //fixme
	return (
		<div className={classes.description}>
			< Wallpaper wallpaper={props.wallpaper} />
			<div className={classes.description__body}>
				< Avatar avatar={props.avatar} />
				<div className={classes.description__info}>
					{/* {
						!props.isMineProfile
							? <button className={classes.status__button} onClick={()=> props.toggleFollow(props.profileId)}></button>
							: ''
					} */}
					{/* <button className={classes.status_button} onClick={() => props.toggleFollow(userId)}>{followed ? 'unfollow' : 'follow'}</button> */}
					<div className={classes.description__name}>{props.name}</div>
					<div className={classes.description__text}>Date of Birth: {props.birth}</div>
					<div className={classes.description__text}>Location: {props.location.country}	{props.location.city}</div>
					<div className={classes.description__text}>Education: {props.education}</div>
					<div className={classes.description__text}>Web Site: {props.site}</div>
				</div>
			</div>
		</div>
	);
}

export default Description;