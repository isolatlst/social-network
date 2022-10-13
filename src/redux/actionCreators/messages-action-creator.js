import { SEND_MESSAGE } from '../actions/messages-action'

//Messages export Action Creator
export const sendNewMessage = (newMessageData) => ({ type: SEND_MESSAGE, newMessageData })