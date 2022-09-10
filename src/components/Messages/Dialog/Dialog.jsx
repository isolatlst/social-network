import classes from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem';
import SendMessage from './SendMessage/SendMessage'
import React from 'react'

function Dialog(props) {
	let messages = props.messagesData.map(message => < DialogItem friend__name={props.friend__name} friend__avatar={props.friend__avatar} friend__message={message.message} />)

	return (
		<div className={classes.dialog}>
			<div className={classes.dialog__items}  >
				{messages}
			</div>
			<SendMessage
				dispatch={props.dispatch}
				newMessageData={props.newMessageData} />
		</div>
	);
}

export default Dialog;

