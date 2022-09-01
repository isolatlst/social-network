import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'
import { addPost } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} />
		</React.StrictMode>
	);
}

export default renderEntireTree




