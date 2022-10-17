import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormControls/FormControls'
import { confirmPassword, maxLength25, requiredField } from '../common/validators/validators'
import classes from './Auth.module.css'


function Auth(props) {
	return (
		<div className={classes.auth}>
			<LoginReduxForm onSubmit={props.logIn} />
			<RegisterReduxForm onSubmit={props.register} />
		</div>
	)
}


const LoginForm = (props) => {
	return (
		<form className={classes.loginForm} onSubmit={props.handleSubmit}>
			<Field component={Input} validate={[requiredField]}
				name="email" type="text"
				text="Email address" />{/*+correctEmail*/}
			<Field component={Input} validate={[requiredField, maxLength25]}
				name="password" type="password"
				text="Password" />
			<div className={classes.button}>
				<span>{props.error}</span>
				<button>Log in</button>
			</div>
		</form >
	)
}
const LoginReduxForm = reduxForm({ form: 'authLogin' })(LoginForm)

const RegisterForm = (props) => {
	return (
		<form className={classes.registrationForm} onSubmit={props.handleSubmit}>
			<Field component={Input} validate={[requiredField]}
				name="firstName" type="text"
				text="First name" />
			<Field component={Input} validate={[requiredField]}
				name="lastName" type="text"
				text="Last name" />
			<Field component={Input} validate={[requiredField]}
				name="email" type="text"
				text="Email address" />{/*+correctEmail*/}
			<Field component={Input} validate={[requiredField, maxLength25]}
				name="password" type="password"
				text="Password" />
			<Field component={Input} validate={[requiredField, confirmPassword]}
				name="confirmPassword" type="password"
				text="Confirm password" />
			<div className={classes.button}>
				<span>{props.error}</span>
				<button>Register</button>
			</div>
		</form >
	)
}
const RegisterReduxForm = reduxForm({ form: 'authRegister' })(RegisterForm)


export default Auth;

