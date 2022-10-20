import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logIn, register } from '../../redux/thunks/auth-thunk'
import Auth from './Auth'

function AuthContainer({ auth: { authStatus, userId }, ...props }) {
	const logIn = (formData) => { props.logIn(formData) }
	const register = (formData) => { props.register(formData) }

	return authStatus
		? < Navigate to={`/profile/${userId}`} />
		: < Auth
			logIn={logIn}
			register={register}
		/>
}


let mapStateToProps = (state) => ({
	auth: state.auth 				// данные, введенные пользователем
})


export default connect(mapStateToProps, {
	logIn,							//thunk для логинизации
	register 						//thunk для регистрации
})(AuthContainer);