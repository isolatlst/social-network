import './App.css';
import './reset.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App(props) {
	return (
		<div className="App">
			<Header />
			<Router>
				<Sidebar />
				<Routes className='main'>
					<Route path='profile' element={<Profile
						profilePage={props.state.profilePage}
						dispatch={props.dispatch} />} />
					<Route path='messages/*' element={<Messages
						messagesPage={props.state.messagesPage}
						dispatch={props.dispatch} />} />
				</Routes>
			</Router >
		</div>
	);
}

export default App;

//