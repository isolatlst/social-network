import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import AppContainerWithProvider from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    // <React.StrictMode>
    <AppContainerWithProvider/>
    // </React.StrictMode>
);


reportWebVitals();
