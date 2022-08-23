import classes from './SendMessage.module.css'

function SendMessage(props) {
	return (
		<div className={classes.sendMessage}>
			<textarea name="" id="" placeholder='type something wonderful...' />
			<button role='button'>Send message</button>
		</div>
	);
}

export default SendMessage;