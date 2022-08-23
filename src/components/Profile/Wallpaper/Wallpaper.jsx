import classes from './Wallpaper.module.css'

function Wallpaper(props) {
	return (
		<div className={classes.wallpaper}>
			<img className={classes.wallpaper__image} src={props.wallpaper__link} />
		</div>
	);
}

export default Wallpaper;