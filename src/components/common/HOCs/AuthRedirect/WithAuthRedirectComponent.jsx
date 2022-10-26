import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'



const withAuthRedirectComponent = (Component) => {
	const RedirectComponent = (props) => {
		const isAuth = useSelector(state => state.auth.authStatus)

		return isAuth
			? <Component {...props} />
			: < Navigate to='/auth' />
	}
	return RedirectComponent
}

export default withAuthRedirectComponent
