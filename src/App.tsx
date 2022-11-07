import React, {useEffect} from 'react';
import {connect, Provider} from 'react-redux';
import store, {AppStateType} from './redux/redux-store'
import {logIn} from './redux/thunks/auth-thunk'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import './reset.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

const AuthContainer = React.lazy(() => import('./components/Auth/AuthContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
// const Messages = React.lazy(() => import('./components/Messages/Messages'));

type MapDispatchPropsType = {
    logIn: (data: null) => void
}
type MapStatePropsType = ReturnType<typeof mapStateToProps>

const App: React.FC<MapDispatchPropsType & MapStatePropsType> = (props) => {
    useEffect(() => {
        if (/AuthToken=*./.test(document.cookie)) props.logIn(null)
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="app">
            <Router basename={process.env.PUBLIC_URL}>
                <Header/>
                <Sidebar myId={props.myId}/>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element={<AuthContainer/>}>
                            <Route path='auth' element={<AuthContainer/>}/>
                        </Route>
                        <Route path='profile/' element={<ProfileContainer/>}>
                            <Route path=':userId' element={<ProfileContainer/>}/>
                        </Route>
                        {/*<Route path='messages/*' element={<Messages/>}/>*/}
                        <Route path='users' element={<UsersContainer/>}/>
                    </Routes>
                </React.Suspense>
            </Router>
        </div>
    );
}

const mapStateToProps = (state: AppStateType) => {
    return {
        auth: state.auth.authStatus,
        myId: state.auth.userId,
    }
}


const AppContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {logIn})(App);
const AppContainerWithProvider = () => <Provider store={store}><AppContainer/></Provider>

export default AppContainerWithProvider