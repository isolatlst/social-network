import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logIn as logInThunk, register as registerThunk } from '../../redux/thunks/auth-thunk'
import Auth from './Auth'

function AuthContainer() {
	const { authStatus, userId } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	const logIn = (formData) => { dispatch(logInThunk(formData)) }
	const register = (formData) => { dispatch(registerThunk(formData)) }


	return authStatus
		? < Navigate to={`/profile/${userId}`} />
		: < Auth
			logIn={logIn}
			register={register}
		/>
}

export default AuthContainer