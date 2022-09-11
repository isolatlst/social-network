import './App.css';
import './reset.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App(props) {
	return (
		<div className="app">
			<Header />
			<Router>
				<Sidebar />
				<Routes className='main'>
					<Route path='profile' element={<Profile
					// store={props.store}
					/>} />
					<Route path='messages/*' element={<Messages
					// store={props.store}
					/>} />
				</Routes>
			</Router >
		</div>
	);
}

export default App;