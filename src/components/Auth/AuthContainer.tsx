import React from 'react'
import {Navigate} from 'react-router-dom'
import {logIn as logInThunk, register as registerThunk} from '../../redux/thunks/auth-thunk'
import Auth from './Auth'
import {LoginDataType, RegisterDataType} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

function AuthContainer() {
    const {authStatus, userId} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const logIn = (formData: LoginDataType) => {
        dispatch(logInThunk(formData))
    }
    const register = (formData: RegisterDataType) => {
        dispatch(registerThunk(formData))
    }


    return authStatus
        ? < Navigate to={`/profile/${userId}`}/>
        : < Auth
            logIn={logIn}
            register={register}
        />
}

export default AuthContainer