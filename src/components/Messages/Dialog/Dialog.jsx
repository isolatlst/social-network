import { Field, reduxForm } from 'redux-form'
import classes from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem';

function Dialog(props) {
	let addNewMessage = (formData) => { props.sendNewMessage(formData.newMessageData) }

	let messages = props.messagesData.map(message => < DialogItem key={message.id} friend__name={props.friend__name} friend__avatar={props.friend__avatar} friend__message={message.message} />)

	return (
		<div className={classes.dialog}>
			<div className={classes.dialog__items}  >
				{messages}
			</div>
			<AddMessageReduxForm onSubmit={addNewMessage} />
		</div>
	);
}



const AddMessageForm = (props) => {
	return (
		<form className={classes.sendMessage} onSubmit={props.handleSubmit}>
			<Field component='textarea' name='newMessageData' placeholder='type something wonderful...' />
			<button className={classes.button}>Send message</button>
		</form>
	)
}
const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialog;



