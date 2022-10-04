import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { toggleAuthStatus, setUserData } from '../../redux/actionCreators/auth-action-creator'
import Header from './Header'
import userPhoto from '../../assets/images/userPhoto.png'


class HeaderContainer extends React.Component {
	requestServer = async (url) => {
		const config = {
			method: 'post',
			url: `${url}`,
			xhrFields: { withCredentials: true }
		}
		return axios(config)
	}
	async componentDidMount() {
		if (document.cookie.length !== 0) {
			let response = await this.requestServer('login')
			response.data.err ? this.props.toggleAuthStatus(false) : this.props.toggleAuthStatus(true)
			this.props.setUserData('userId', response.data.userId)
			console.log(response.data)	//fixme
		}
	}

	logOut = () => {
		this.requestServer('logout')
		this.props.toggleAuthStatus(false)
	}

	render() {
		return <Header
			{...this.props}
			logOut={this.logOut}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		auth: state.auth.authStatus,
		avatar: state.auth.avatar ? state.auth.avatar : userPhoto,
	}
}

export default connect(mapStateToProps, { toggleAuthStatus, setUserData })(HeaderContainer);