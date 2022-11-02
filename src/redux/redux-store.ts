// import { configureStore } from '@reduxjs/toolkit'
import {Action, applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux"
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import profileReducer from './reducers/profile-reducer'
import messagesReducer from './reducers/messages-reducer'
import usersReducer from './reducers/users-reducer'
import authReducer from './reducers/auth-reducer'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    auth: authReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    form: formReducer
})

// @ts-ignore //forDev
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore //forDev
window.store = store


type ReducersType = typeof reducers
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

//Action Creator Type
export type InferActionsTypes<T extends { [key: string]: (...arg: any[]) => any }> = ReturnType<PropertiesTypes<T>>
//Thunk Type
export type ThunkType<Actions extends Action> = ThunkAction<Promise<void>, AppStateType, unknown, Actions>
//App State Type
export type AppStateType = ReturnType<ReducersType>
//App Dispatch Type
export type AppDispatchType = typeof store.dispatch

export default store
