import classes from './Wallpaper.module.css'

function Wallpaper({ wallpaper }) {
	let onLoadWallpaper = (e) => {
		e.target.style.display = 'block'
	}

	return (
		<div className={classes.wallpaper}>
			<img className={classes.wallpaper__image} src={wallpaper} onLoad={onLoadWallpaper} alt='Wallpaper' />
		</div>
	);
}

export default Wallpaper;