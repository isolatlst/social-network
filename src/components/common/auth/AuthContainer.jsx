import React from 'react'
import { connect } from 'react-redux'
import { setUserData } from '../../../redux/actionCreators/auth-action-creator'
import { logIn, register } from '../../../redux/thunks/auth-thunk'
import Auth from './Auth'


class AuthContainer extends React.Component {
	onInputData = (e) => { this.props.setUserData(e.target.name, e.target.value) }
	logIn = () => { this.props.logIn(this.props.auth) }
	register = () => { this.props.register(this.props.auth) }

	render() {
		return this.props.authStatus ? ''
			: < Auth
				{...this.props.auth}
				logIn={this.logIn}
				register={this.register}
				onInputData={this.onInputData}
			/>
	}
}


let mapStateToProps = (state) => ({
	auth: state.auth 				// данные, введенные пользователем
})


export default connect(mapStateToProps, {
	setUserData,					// установить Id пользователя в state.auth
	logIn,							//thunk для логинизации
	register 						//thunk для регистрации
})(AuthContainer);