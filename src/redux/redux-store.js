import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import thunkMiddleware from 'redux-thunk'
// import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profile-reducer'
import messagesReducer from './reducers/messages-reducer'
import usersReducer from './reducers/users-reducer'
import authReducer from './reducers/auth-reducer'

let reducers = () => combineReducers({
	auth: authReducer,
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	usersPage: usersReducer,
})


let store = createStore(reducers(), applyMiddleware(thunkMiddleware))

window.store = store

export default store
