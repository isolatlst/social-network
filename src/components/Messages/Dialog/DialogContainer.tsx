import Dialog from './Dialog'
import {connect} from 'react-redux';
import {messagesACs} from "../../../redux/actionCreators/messages-action-creator";
import {AppStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        messagesData: state.messagesPage.messagesData,
        friend__name: 'Dennis',
        friend__avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg'
    }
}

export default connect(mapStateToProps, {
    sendNewMessage: messagesACs.sendNewMessage
})(Dialog)