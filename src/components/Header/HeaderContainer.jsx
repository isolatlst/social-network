import React from 'react'
import { connect } from 'react-redux'
import { toggleAuthStatus, setUserData } from '../../redux/actionCreators/auth-action-creator'
import Header from './Header'
import userPhoto from '../../assets/images/userPhoto.png'
import { authAPI } from '../../API/api'


class HeaderContainer extends React.Component {
	async componentDidMount() {
		if (document.cookie.length !== 0) {
			let response = await authAPI.loginAPI(this.props.auth)
			response.err ? this.props.toggleAuthStatus(false) : this.props.toggleAuthStatus(true)
			this.props.setUserData('userId', response.userId)
			console.log(response)	//fixme
		}
	}
	logOut = async () => {
		let response = await authAPI.logoutAPI()
		if (!response.err) {
			this.props.toggleAuthStatus(false)
		}
		console.log(response);
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