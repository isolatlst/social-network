import Dialog from './Dialog'
import {connect} from 'react-redux';
import {messagesACs} from "../../../redux/actionCreators/messages-action-creator";

const mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData,
        friend__name: 'Dennis',
        friend__avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg'
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: (newMessage) => dispatch(messagesACs.sendNewMessage(newMessage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);