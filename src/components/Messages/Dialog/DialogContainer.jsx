import Dialog from './Dialog'
import { updateNewMessageACreator, sendNewMessageACreator } from '../../../redux/actionCreators/messages-action-creator'
import StoreContext from '../../../store-context'

function DialogContainer(props) {
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState()
					let sendNewMessage = () => {
						store.dispatch(sendNewMessageACreator(''))
					}
					let updateNewMessage = (text) => {
						store.dispatch(updateNewMessageACreator(text))
					}
					return (
						< Dialog
							sendNewMessage={sendNewMessage}
							updateNewMessage={updateNewMessage}
							messagesData={state.messagesPage.messagesData}
							newMessageData={state.messagesPage.newMessageData}
							friend__name='Dennis'
							friend__avatar='https://a.d-cd.net/bEAAAgDEreA-1920.jpg'
						/>
					)
				}
			}
		</StoreContext.Consumer>
	);
	// let state = props.store.getState()

	// let sendNewMessage = () => {
	// 	props.store.dispatch(sendNewMessageACreator(''))
	// }
	// let updateNewMessage = (text) => {
	// 	props.store.dispatch(updateNewMessageACreator(text))
	// }

	// return (
	// 	< Dialog
	// 		sendNewMessage={sendNewMessage}
	// 		updateNewMessage={updateNewMessage}
	// 		messagesData={state.messagesPage.messagesData}
	// 		newMessageData={state.messagesPage.newMessageData}
	// 		friend__name='Dennis'
	// 		friend__avatar='https://a.d-cd.net/bEAAAgDEreA-1920.jpg' />
	// );
}

export default DialogContainer;
