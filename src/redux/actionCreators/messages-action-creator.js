import { UPDATE_NEW_MESSAGE_TEXT, SEND_MESSAGE } from '../actions/messages-action'

//Messages export Action Creator
export const sendNewMessage = (messageText) => ({ type: SEND_MESSAGE, messageText })
export const updateNewMessage = (messageText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText })