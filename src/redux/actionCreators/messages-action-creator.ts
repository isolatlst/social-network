import {InferActionsTypes} from "../redux-store";

export type MessagesActionsType = InferActionsTypes<typeof messagesACs>

export const messagesACs = {
    sendNewMessage: (newMessageData: string) => ({type: 'MESSAGES/SEND_MESSAGE', newMessageData} as const),
}
