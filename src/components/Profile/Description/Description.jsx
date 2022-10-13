import Avatar from '../../common/Avatar/Avatar'
import Wallpaper from './Wallpaper/Wallpaper'
import classes from './Description.module.css'
import DescriptionText from './DescriptionText';

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
					<DescriptionText updateProfile={props.updateProfile} isMineProfile={props.isMineProfile} type='birth' text='Date of Birth: ' data={props.birth} />
					<DescriptionText updateProfile={props.updateProfile} isMineProfile={props.isMineProfile} type='location' text='Location: ' data={`${props.location.country} ${props.location.city}`} />
					<DescriptionText updateProfile={props.updateProfile} isMineProfile={props.isMineProfile} type='education' text='Education: ' data={props.education} />
					<DescriptionText updateProfile={props.updateProfile} isMineProfile={props.isMineProfile} type='site' text='Web Site: ' data={props.site} />
				</div>
			</div>
		</div>
	);
}

export default Description;