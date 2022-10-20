import './App.css';
import './reset.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import HeaderContainer from './components/Header/HeaderContainer';
import AuthContainer from './components/Auth/AuthContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Messages from './components/Messages/Messages';
import { connect } from 'react-redux';
import { logIn } from './redux/thunks/auth-thunk'
import { useEffect } from 'react';

function App(props) {
	useEffect(() => {
		if (document.cookie.length) props.logIn()
	}, [])// eslint-disable-line react-hooks/exhaustive-deps
	return (
		<div className="app">
			<Router>
				<HeaderContainer />
				<Sidebar myId={props.myId} />
				<Routes className='main'>
					<Route path='/' element={<AuthContainer />}>
						<Route path='auth' element={<AuthContainer />} />
					</Route>
					<Route path='profile/' element={<ProfileContainer />} >
						<Route path=':userId' element={<ProfileContainer />} />
					</Route>
					<Route path='messages/*' element={<Messages />} />
					<Route path='users' element={<UsersContainer />} />
				</Routes>
			</Router >
		</div>
	);
}

let mapStateToProps = (state) => {
	return {
		auth: state.auth.authStatus,
		myId: state.auth.userId,
	}
}


export default connect(mapStateToProps, { logIn })(App);