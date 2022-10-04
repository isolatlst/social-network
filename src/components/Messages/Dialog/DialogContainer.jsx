import Dialog from './Dialog'
import { updateNewMessage, sendNewMessage } from '../../../redux/actionCreators/messages-action-creator'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		messagesData: state.messagesPage.messagesData,
		newMessageData: state.messagesPage.newMessageData,
		friend__name: 'Dennis',
		friend__avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg'
	}
}

export default connect(mapStateToProps, { updateNewMessage, sendNewMessage })(Dialog);