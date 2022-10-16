import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const mapStateToPropsForRedirect = (state) => ({ isAuth: state.auth.authStatus })


const withAuthRedirectComponent = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return < Navigate to='/auth' />

			return <Component {...this.props} />
		}
	}

	return connect(mapStateToPropsForRedirect, {})(RedirectComponent)
}

export default withAuthRedirectComponent
