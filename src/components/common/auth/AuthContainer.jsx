import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { setUserData, toggleAuthStatus } from '../../../redux/actionCreators/auth-action-creator'
import { setUserProfile } from '../../../redux/actionCreators/profile-action-creator'
import Auth from './Auth'


class AuthContainer extends React.Component {
	requestServer = async (url, isWithData) => {
		const config = {
			method: 'post',
			url: `${url}`,
			xhrFields: {
				withCredentials: true
			},
			data: isWithData ? this.props.auth : ''
		}
		return axios(config)
	}

	async componentDidMount() { }

	onInputData = (e) => {
		this.props.setUserData(e.target.name, e.target.value)
	}

	logIn = async () => {
		let response = await this.requestServer('login', true)
		response.data.err ? this.props.toggleAuthStatus(false) : this.props.toggleAuthStatus(true)
		this.props.setUserData('userId', response.data.userId)
		console.log(response.data)  //fixme
	}
	register = async () => {
		let response = await this.requestServer('register', true)
		console.log(response.data)  //fixme
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