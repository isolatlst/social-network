import React from 'react'
import { Field, reduxForm } from 'redux-form'
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
			<div className={classes.group}>
				<Field className={classes.input} component='input' name="email" type="text" required />
				<span className={classes.bar}></span>
				<label className={classes.label}>Email address</label>
			</div>
			<div className={classes.group}>
				<Field className={classes.input} component='input' name="password" type="password" required />
				<span className={classes.bar}></span>
				<label className={classes.label}>Password</label>
			</div>
			<div className={classes.button}><button>Log in</button></div>
		</form >
	)
}
const LoginReduxForm = reduxForm({ form: 'authLogin' })(LoginForm)

const RegisterForm = (props) => {
	return (
		<form className={classes.registrationForm} onSubmit={props.handleSubmit}>
			<div className={classes.group}>
				<Field className={classes.input} component='input' name="firstName" type="text" required />
				<span className={classes.bar}></span>
				<label className={classes.label}>First name</label>
			</div>
			<div className={classes.group}>
				<Field className={classes.input} component='input' name="lastName" type="text" required />
				<span className={classes.bar}></span>
				<label className={classes.label}>Last name</label>
			</div>
			<div className={classes.group}>
				<Field className={classes.input} component='input' name="email" type="text" required />
				<span className={classes.bar}></span>
				<label className={classes.label}>Email address</label>
			</div>
			<div className={classes.group}>
				<Field className={classes.input} component='input' name="password" type="password" required />
				<span className={classes.bar}></span>
				<label className={classes.label}>Password</label>
			</div>
			<div className={classes.group}>
				<Field className={classes.input} component='input' name="confirmPassword" type="password" required />
				<span className={classes.bar}></span>
				<label className={classes.label}>Confirm password</label>
			</div>
			<div className={classes.button}><button>Register</button></div>
		</form >
	)
}
const RegisterReduxForm = reduxForm({ form: 'authRegister' })(RegisterForm)


export default Auth;

