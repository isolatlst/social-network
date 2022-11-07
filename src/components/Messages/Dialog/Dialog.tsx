import {InjectedFormProps, reduxForm} from 'redux-form'
import classes from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem';
import React from "react";
import {InitialStateType} from "../../../redux/reducers/messages-reducer";
import {SendMessageType} from "../../../types/forms";
import {createField, Textarea} from "../../common/FormControls/FormControls";
import {requiredField} from "../../common/validators/validators";

type PropsType = {
    friend__avatar: string //fixme
    friend__name: string  //fixme
    messagesData: InitialStateType['messagesData']
    sendNewMessage: (message: string) => void
}


const Dialog: React.FC<PropsType> = (props) => {
    let addNewMessage = (formData: SendMessageType) => {
        props.sendNewMessage(formData.newMessageData)
    }
    return (
        <div className={classes.dialog}>
            <div className={classes.dialog__items}>
                {
                    props.messagesData.map(message =>
                        < DialogItem key={message.id} friend__name={props.friend__name} friend__avatar={props.friend__avatar} friend__message={message.message}/>
                    )
                }
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    );
}


const AddMessageForm: React.FC<InjectedFormProps<SendMessageType>> = ({handleSubmit, ...props}) => {
    return (
        <form className={classes.sendMessage} onSubmit={handleSubmit}>
            {createField<Extract<keyof SendMessageType, string>>(Textarea, [requiredField],
                'type something wonderful...', "newMessageData", 'textarea', '')}
            <button className={classes.button}>Send message</button>
        </form>
    )
}
const AddMessageReduxForm = reduxForm<SendMessageType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialog;



