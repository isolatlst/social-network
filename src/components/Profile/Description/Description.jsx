import Avatar from '../../common/Avatar/Avatar'
import Wallpaper from './Wallpaper/Wallpaper'
import classes from './Description.module.css'
import DescriptionText from './DescriptionText'
import settings from '../../../assets/icons/settings.svg'

function Description(props) {
	return (
		<div className={classes.description}>
			< Wallpaper wallpaper={props.wallpaper} />
			<div className={classes.description__body}>
				{props.isMineProfile &&
					<div className={classes.editModeIcon} onClick={e => props.setEditMode(true)}>
						<img src={settings} alt="" />
					</div>}
				< Avatar avatar={props.avatar} scalable={true} />
				<div className={classes.description__info}>
					<div className={classes.description__name}>{props.name}</div>
					<DescriptionText text='Date of Birth: ' data={props.birth} />
					<DescriptionText text='Location: ' data={props.location} />
					<DescriptionText text='Education: ' data={props.education} />
					<DescriptionText text='Web Site: ' data={props.site} />
				</div>
			</div>
		</div>
	);
}

export default Description;