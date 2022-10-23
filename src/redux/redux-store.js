import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux"
import thunkMiddleware from 'redux-thunk'
// import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profile-reducer'
import messagesReducer from './reducers/messages-reducer'
import usersReducer from './reducers/users-reducer'
import authReducer from './reducers/auth-reducer'
import { reducer as formReducer } from 'redux-form'

let reducers = () => combineReducers({
	auth: authReducer,
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	usersPage: usersReducer,
	form: formReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers(), /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)))

window.store = store

export default store
