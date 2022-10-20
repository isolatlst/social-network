import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { logOut } from '../../redux/thunks/auth-thunk'


function HeaderContainer(props) {
	return (
		<Header	{...props} />
	)
}


let mapStateToProps = (state) => {
	return {
		auth: state.auth.authStatus,											// boolean авторизован ли пользователь
		avatar: state.auth.avatar,  											// аватар пользователя в state.auth
	}
}

export default connect(mapStateToProps, {
	logOut											// Покинуть страницу
})(HeaderContainer);