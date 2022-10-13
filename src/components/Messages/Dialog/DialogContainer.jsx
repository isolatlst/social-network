import Dialog from './Dialog'
import { sendNewMessage } from '../../../redux/actionCreators/messages-action-creator'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		messagesData: state.messagesPage.messagesData,
		friend__name: 'Dennis',
		friend__avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg'
	}
}

export default connect(mapStateToProps, { sendNewMessage })(Dialog);