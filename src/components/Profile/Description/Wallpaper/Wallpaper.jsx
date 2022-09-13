import classes from './Wallpaper.module.css'

function Wallpaper(props) {
	let onLoadWallpaper = (e) => {
		e.target.style.display = 'block'
	}

	return (
		<div className={classes.wallpaper}>
			<img className={classes.wallpaper__image} src={props.wallpaper} onLoad={onLoadWallpaper} alt='Wallpaper' />
		</div>
	);
}

export default Wallpaper;