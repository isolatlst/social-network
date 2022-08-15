import './App.css';
import './reset.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';


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