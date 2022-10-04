import './App.css';
import './reset.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Messages from './components/Messages/Messages';
import UsersContainer from './components/Users/UsersContainer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthContainer from './components/common/auth/AuthContainer';

function App() {
	return (
		<div className="app">
			<Router>
				<HeaderContainer />
				<Sidebar />
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

export default App;