import React, {useEffect, useState} from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, Input} from '../common/FormControls/FormControls'
import Modal from '../common/Modal/Modal'
import {confirmPassword, maxLength25, requiredField} from '../common/validators/validators'
import classes from './Auth.module.css'
import {LoginDataType, RegisterDataType} from "../../types/forms"

type PropsType = {
    logIn: (formData: LoginDataType) => void
    register: (formData: RegisterDataType) => void
}
type UseStateType = {
    openModal?: () => void
    closeModal?: () => void
}
type LoginFormNamesType = Extract<keyof LoginDataType, string>
type RegisterFormNamesType = Extract<keyof RegisterDataType, string>

const Auth: React.FC<PropsType> = (props) => {
    const [isModalOpen, setOpenModal] = useState<boolean>(false)
    useEffect(() => {
        const keydownHndlr: (e: KeyboardEvent) => void = (e) => {
            if (e.key === 'Escape') setOpenModal(false)
        }
        document.body.addEventListener('keydown', keydownHndlr)
        return () => document.body.removeEventListener('keydown', keydownHndlr)
    }, [])

    return (
        <main className={classes.auth}>
            <LoginReduxForm onSubmit={props.logIn} openModal={() => setOpenModal(true)}/>
            < Modal isModalOpen={isModalOpen} closeModal={() => setOpenModal(false)}>
                <RegisterReduxForm onSubmit={props.register}/>
            </Modal>
        </main>
    )
}


const LoginForm: React.FC<InjectedFormProps<LoginDataType, UseStateType> & UseStateType> = ({error, handleSubmit, openModal}) => {
    return (
        <form className={classes.loginForm} onSubmit={handleSubmit}>
            {createField<LoginFormNamesType>(Input, [requiredField],
                '', 'email', 'text', 'Email address')} {/*+correctEmail*/}
            {createField<LoginFormNamesType>(Input, [requiredField, maxLength25],
                '', 'password', 'password', 'Password')}
            
            <span className={classes.error}>{error}</span>
            <div className={`${classes.button} ${classes.loginBtn}`}>
                <button>Log in</button>
            </div>


            <div className={`${classes.button} ${classes.goToRegister}`} onClick={openModal}>
                <button onClick={e => e.preventDefault()}>Register</button>
                {/* Go to register */}
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<LoginDataType, UseStateType>({form: 'authLogin'})(LoginForm)


const RegisterForm: React.FC<InjectedFormProps<RegisterDataType>> = ({error, handleSubmit}) => {
    return (
        <form className={classes.registrationForm} onSubmit={handleSubmit}>
            {createField<RegisterFormNamesType>(Input, [requiredField],
                '', "firstName", 'text', 'First name')}
            {createField<RegisterFormNamesType>(Input, [requiredField],
                '', 'lastName', 'text', 'Last name')}
            {createField<RegisterFormNamesType>(Input, [requiredField],
                '', 'email', 'text', 'Email address')} {/*+correctEmail*/}
            {createField<RegisterFormNamesType>(Input, [requiredField, maxLength25],
                '', 'password', 'password', 'Password')}
            {createField<RegisterFormNamesType>(Input, [requiredField, confirmPassword],
                '', 'confirmPassword', 'password', 'Confirm password')}
            <div className={classes.button}>
                <span className={classes.error}>{error}</span>
                <button>Register</button>
            </div>
        </form>
    )
}
const RegisterReduxForm = reduxForm<RegisterDataType>({form: 'authRegister'})(RegisterForm)


export default Auth;

