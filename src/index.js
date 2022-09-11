import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import App from './App'
import './index.css'
import store from './redux/redux-store'
import StoreContext, { Provider } from './store-context'

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				{/* <StoreContext.Provider value={store}> */}
				<App />
				{/* </StoreContext.Provider> */}
			</Provider>
		</React.StrictMode>
	);
}

renderEntireTree()
store.subscribe(renderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
