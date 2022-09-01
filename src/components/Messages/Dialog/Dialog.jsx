import classes from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem';
import SendMessage from './SendMessage/SendMessage'
import React from 'react'

function Dialog(props) {
	// let textarea = React.createRef();

	// let addPostHndlr = e => {
	// 	props.postsData.push({ id: props.postsData.length + 1, post: `${textarea.current.value}` })
	// 	alert(JSON.stringify(props));
	// }

	let messages = props.messagesData.map(message => < DialogItem friend__name={props.friend__name} friend__avatar={props.friend__avatar} friend__message={message.message} />)

	return (
		<div className={classes.dialog}>
			<div className={classes.dialog__items}>
				{messages}
			</div>
			<SendMessage />
		</div>
	);
}

export default Dialog;