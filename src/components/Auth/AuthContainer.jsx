import React from 'react'
import { connect } from 'react-redux'
import { logIn, register } from '../../redux/thunks/auth-thunk'
import Auth from './Auth'


class AuthContainer extends React.Component {
	logIn = (formData) => { this.props.logIn(formData) }
	register = (formData) => { this.props.register(formData) }

	render() {
		return this.props.auth.authStatus ? <div>Вы авторизированы</div>
			: < Auth
				logIn={this.logIn}
				register={this.register}
			/>
	}
}


let mapStateToProps = (state) => ({
	auth: state.auth 				// данные, введенные пользователем
})


export default connect(mapStateToProps, {
	logIn,							//thunk для логинизации
	register 						//thunk для регистрации
})(AuthContainer);