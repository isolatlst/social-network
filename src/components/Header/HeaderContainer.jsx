import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { logIn, logOut } from '../../redux/thunks/auth-thunk'


class HeaderContainer extends React.Component {
	componentDidMount() { if (document.cookie.length) this.props.logIn() }
	logOut = () => { this.props.logOut() }

	render() {
		return <Header
			{...this.props}
			logOut={this.logOut}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		auth: state.auth.authStatus,											// boolean авторизован ли пользователь
		avatar: state.auth.avatar,  											// аватар пользователя в state.auth
	}
}

export default connect(mapStateToProps, {
	logIn,											// Вход на страницу
	logOut											// Покинуть страницу
})(HeaderContainer);