import {SEND_MESSAGE} from '../actions/messages-action'

export type SendNewMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageData: string
}

//Messages export Action Creator
export const sendNewMessage = (newMessageData: string): SendNewMessageActionType => ({type: SEND_MESSAGE, newMessageData})