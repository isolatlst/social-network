import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import {getIsAuth} from "../../../../redux/selectors/auth-selectors";


const withAuthRedirectComponent = (Component: React.FC) => {
    const RedirectComponent: React.FC = (props: any) => {
        const isAuth = useSelector(getIsAuth)

        return isAuth
            ? <Component {...props} />
            : < Navigate to='/auth'/>
    }
    return RedirectComponent
}

export default withAuthRedirectComponent
