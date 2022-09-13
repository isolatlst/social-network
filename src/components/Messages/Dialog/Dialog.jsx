import classes from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem';

function Dialog(props) {
	let addMessageInState = () => { props.sendNewMessage() }

	let onTypeMessage = (event) => { props.updateNewMessage(event.target.value) }

	let messages = props.messagesData.map(message => < DialogItem key={message.id} friend__name={props.friend__name} friend__avatar={props.friend__avatar} friend__message={message.message} />)

	return (
		<div className={classes.dialog}>
			<div className={classes.dialog__items}  >
				{messages}
			</div>
			<div className={classes.sendMessage}>
				<textarea onChange={onTypeMessage} value={props.newMessageData} placeholder='type something wonderful...' />
				<button className={classes.button} onClick={addMessageInState}>Send message</button>
			</div>
		</div>
	);
}

export default Dialog;



