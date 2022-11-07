import Avatar from '../../../common/Avatar/Avatar'
import classes from './DialogItem.module.css'
import React from "react";


type PropsType = {
    friend__avatar: string
    friend__name: string
    friend__message: string
}

const DialogItem: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.dialog__item}>
            < Avatar avatar={props.friend__avatar}/>
            <div className={classes.dialog__name}>{props.friend__name}</div>
            <div className={classes.dialog__text}>{props.friend__message}</div>
        </div>
    );
}

export default DialogItem;