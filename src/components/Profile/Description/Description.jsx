import Avatar from '../Avatar/Avatar';
import classes from './Description.module.css'


function Description(props) {
	return (
		<div className={classes.description}>
			< Avatar avatar={props.avatar} />
			<div className={classes.description__info}>
				<div className={classes.description__name}>{props.name}</div>
				<div className={classes.description__text}>Date of Birth: {props.birth}</div>
				<div className={classes.description__text}>City: {props.city}</div>
				<div className={classes.description__text}>Education: {props.education}</div>
				<div className={classes.description__text}>Web Site: {props.site}</div>
			</div>
		</div>
	);
}

export default Description;