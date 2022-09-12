import Dialog from './Dialog'
import { updateNewMessageACreator, sendNewMessageACreator } from '../../../redux/actionCreators/messages-action-creator'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		messagesData: state.messagesPage.messagesData,
		newMessageData: state.messagesPage.newMessageData,
		friend__name: 'Dennis',
		friend__avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg'
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		sendNewMessage: () => { dispatch(sendNewMessageACreator('')) },
		updateNewMessage: (text) => { dispatch(updateNewMessageACreator(text)) }
	}
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer;