import './App.css';
import './reset.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Messages from './components/Messages/Messages';
import UsersContainer from './components/Users/UsersContainer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<Header />
			<Router>
				<Sidebar />
				<Routes className='main'>
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