import React from 'react'
import { connect } from 'react-redux'
import { authAPI } from '../../../API/api'
import { setUserData, toggleAuthStatus } from '../../../redux/actionCreators/auth-action-creator'
import { setUserProfile } from '../../../redux/actionCreators/profile-action-creator'
import Auth from './Auth'


class AuthContainer extends React.Component {
	onInputData = (e) => {
		this.props.setUserData(e.target.name, e.target.value)
	}
	logIn = async () => {
		let response = await authAPI.loginAPI(this.props.auth)
		response.err ? this.props.toggleAuthStatus(false) : this.props.toggleAuthStatus(true)
		this.props.setUserData('userId', response.userId)
		console.log(response)  //fixme
	}
	register = async () => {
		let response = await authAPI.registerAPI(this.props.auth)
		console.log(response)  //fixme
	}

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

let mapStateToProps = (state) => ({ auth: state.auth })



export default connect(mapStateToProps, { setUserData, toggleAuthStatus, setUserProfile })(AuthContainer);