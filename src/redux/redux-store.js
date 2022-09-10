import { combineReducers, legacy_createStore as createStore } from "redux"
import profileReducer from './reducers/profile-reducer'
import messagesReducer from './reducers/messages-reducer'

let reducers = () => combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer
})



let store = createStore(reducers())

export default store
