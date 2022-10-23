import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import store from './redux/redux-store'
import { logIn } from './redux/thunks/auth-thunk'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './reset.css';
import Sidebar from './components/Sidebar/Sidebar';
import HeaderContainer from './components/Header/HeaderContainer';
const AuthContainer = React.lazy(() => import('./components/Auth/AuthContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Messages = React.lazy(() => import('./components/Messages/Messages'));


function App(props) {
	useEffect(() => {
		if (/AuthToken=/.test(document.cookie)) props.logIn()
	}, [])// eslint-disable-line react-hooks/exhaustive-deps
	return (
		<div className="app">
			<Router>
				<HeaderContainer />
				<Sidebar myId={props.myId} />
				<React.Suspense fallback={<div>Loading...</div>}>
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
				</React.Suspense>
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


const AppContainer = connect(mapStateToProps, { logIn })(App);
const AppContainerWithProvider = () => <Provider store={store}><AppContainer /></Provider>

export default AppContainerWithProvider