import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import { Input } from '../common/FormControls/FormControls'
import Modal from '../common/Modal/Modal'
import { createField } from '../common/FormControls/FormControls'
import { confirmPassword, maxLength25, requiredField } from '../common/validators/validators'
import classes from './Auth.module.css'


function Auth(props) {
	const [isModalOpen, setOpenModal] = useState(false)

	return (
		<main className={classes.auth} onKeyDown={e => { if (e.keyCode === 27) setOpenModal(false) }}>
			<LoginReduxForm onSubmit={props.logIn} setOpenModal={setOpenModal} />
			< Modal isModalOpen={isModalOpen} setOpenModal={setOpenModal} >
				<RegisterReduxForm onSubmit={props.register} />
			</Modal>
		</main>
	)
}


const LoginForm = (props) => {
	return (
		<form className={classes.loginForm} onSubmit={props.handleSubmit}>
			{createField(Input, [requiredField], '', 'email', 'text', 'Email address')} {/*+correctEmail*/}
			{createField(Input, [requiredField, maxLength25], '', 'password', 'password', 'Password')}
			<span className={classes.error}>{props.error}</span>
			<div className={`${classes.button} ${classes.loginBtn}`}>
				<button>Log in</button>
			</div>
			<div className={`${classes.button} ${classes.goToRegister}`} onClick={e => props.setOpenModal(true)}>
				<button onClick={e => e.preventDefault()}>Register</button> {/* Go to register */}
			</div>
		</form >
	)
}
const LoginReduxForm = reduxForm({ form: 'authLogin' })(LoginForm)


const RegisterForm = (props) => {
	return (
		<form className={classes.registrationForm} onSubmit={props.handleSubmit} >
			{createField(Input, [requiredField], '', 'firstName', 'text', 'First name')}
			{createField(Input, [requiredField], '', 'lastName', 'text', 'Last name')}
			{createField(Input, [requiredField], '', 'email', 'text', 'Email address')} {/*+correctEmail*/}
			{createField(Input, [requiredField, maxLength25], '', 'password', 'password', 'Password')}
			{createField(Input, [requiredField, confirmPassword], '', 'confirmPassword', 'password', 'Confirm password')}
			<div className={classes.button}>
				<span className={classes.error}>{props.error}</span>
				<button>Register</button>
			</div>
		</form >
	)
}
const RegisterReduxForm = reduxForm({ form: 'authRegister' })(RegisterForm)


export default Auth;

