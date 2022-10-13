import React from 'react'
import classes from './Auth.module.css'


function Auth(props) {
	return (
		<div className={classes.auth}>
			<div className={classes.loginForm}>
				<div className={classes.group}>
					<input onChange={props.onInputData} className={classes.input} value={props.email} name="email" type="text" required />
					<span className={classes.bar}></span>
					<label className={classes.label}>Email address</label>
				</div>
				<div className={classes.group}>
					<input onChange={props.onInputData} className={classes.input} value={props.password} name="password" type="password" required />
					<span className={classes.bar}></span>
					<label className={classes.label}>Password</label>
				</div>

				<div className={classes.button}><button onClick={props.logIn}>Log in</button></div>
			</div >

			<div className={classes.registrationForm}>
				<div className={classes.group}>
					<input onChange={props.onInputData} className={classes.input} value={props.firstName} name="firstName" type="text" required />
					<span className={classes.bar}></span>
					<label className={classes.label}>First name</label>
				</div>
				<div className={classes.group}>
					<input onChange={props.onInputData} className={classes.input} value={props.lastName} name="lastName" type="text" required />
					<span className={classes.bar}></span>
					<label className={classes.label}>Last name</label>
				</div>
				<div className={classes.group}>
					<input onChange={props.onInputData} className={classes.input} value={props.email} name="email" type="text" required />
					<span className={classes.bar}></span>
					<label className={classes.label}>Email address</label>
				</div>
				<div className={classes.group}>
					<input onChange={props.onInputData} className={classes.input} value={props.password} name="password" type="password" required />
					<span className={classes.bar}></span>
					<label className={classes.label}>Password</label>
				</div>
				<div className={classes.group}>
					<input onChange={props.onInputData} className={classes.input} value={props.confirmPassword} name="confirmPassword" type="password" required />
					<span className={classes.bar}></span>
					<label className={classes.label}>Confirm password</label>
				</div>

				<div className={classes.button}><button onClick={props.register}>Register</button></div>
			</div >

		</div >
	)
}

export default Auth;

