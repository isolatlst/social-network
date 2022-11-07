import classes from './Wallpaper.module.css'
import React, {BaseSyntheticEvent} from "react";

function Wallpaper({wallpaper}: { wallpaper: string }) {
    let onLoadWallpaper = (e: BaseSyntheticEvent) => {
        e.target.style.display = 'block'
    }

    return (
        <div className={classes.wallpaper}>
            <img className={classes.wallpaper__image} src={wallpaper} onLoad={onLoadWallpaper} alt='Wallpaper'/>
        </div>
    );
}

export default Wallpaper;