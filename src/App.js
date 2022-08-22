import './App.css';
import './reset.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
	return (
		<div className="App">
			<Header />
			<Sidebar />
			<Profile />
		</div>
	);
}

export default App;

//