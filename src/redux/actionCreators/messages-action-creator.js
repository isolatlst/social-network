import { UPDATE_NEW_MESSAGE_TEXT, SEND_MESSAGE } from '../actions/messages-action'

//Messages export Action Creator
export const sendNewMessageACreator = (text) => ({ type: SEND_MESSAGE, messageText: text })
export const updateNewMessageACreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText: text })