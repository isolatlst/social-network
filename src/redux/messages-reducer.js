//Messages const
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

//Messages export Action Creator
export const sendNewMessageACreator = (text) => ({ type: SEND_MESSAGE, messageText: text })
export const updateNewMessageACreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText: text })

const messagesReducer = (state, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			let newMessage = {
				id: state.messagesData.length + 1,
				date: '',
				sender: '',
				message: state.newMessageData
			}
			if (state.newMessageData) {
				state.messagesData.push(newMessage)
				state.newMessageData = ''
			}
			return state
		}

		case UPDATE_NEW_MESSAGE_TEXT: {
			state.newMessageData = action.messageText
			return state
		}

		default: return state
	}
}

export default messagesReducer