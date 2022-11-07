import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import {getIsAuth} from "../../../../redux/selectors/auth-selectors";


function withAuthRedirectComponent<PropsType>(Component: React.FC) {
    return (props: PropsType | null) => {
        const isAuth = useSelector(getIsAuth)

        return isAuth
            ? <Component {...props} />
            : < Navigate to='/auth'/>
    }
}

export default withAuthRedirectComponent
