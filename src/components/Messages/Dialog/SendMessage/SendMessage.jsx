import classes from './SendMessage.module.css'
import React from 'react';
import { updateNewMessageACreator, sendNewMessageACreator } from '../../../../redux/messages-reducer'


function SendMessage(props) {
	let addMessageInState = () => {
		props.dispatch(sendNewMessageACreator(''))
	}
	let onTypeMessage = (event) => {
		props.dispatch(updateNewMessageACreator(event.target.value))
	}

	return (
		<div className={classes.sendMessage}>
			<textarea onChange={onTypeMessage} value={props.newMessageData} placeholder='type something wonderful...' />
			<button role='button' onClick={addMessageInState}>Send message</button>
		</div>
	);
}

export default SendMessage;