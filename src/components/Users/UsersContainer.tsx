import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import withAuthRedirectComponent from '../common/HOCs/AuthRedirect/WithAuthRedirectComponent'
import {getUsers, toggleFollow} from '../../redux/thunks/users-thunk'
import {getFollowingInProgressSelector, getIsFetchingSelector, getPagesCountSelector, getPagesSizeSelector, getTotalPageSelector, getUsersSelector} from '../../redux/selectors/users-selectors'
import {getMyUserId} from '../../redux/selectors/auth-selectors'
import UsersPreloader from '../common/Preloaders/Users/UsersPreloader'
import classes from './Users.module.css'
import Users from './Users'
import Paginator from '../common/Paginator/Paginator'
import {AppStateType} from "../../redux/redux-store"
import {UserType} from "../../redux/reducers/users-reducer"


type MapStatePropsType = {
    isFetching: boolean
    myId: number
    usersData: Array<UserType>
    totalPage: number
    pageSize: number
    pagesCount: number
    isFollowingInProgress: Array<number>
}
type MapDispatchPropsType = {
    getUsers: (totalPage: number, pageSize: number) => void
    toggleFollow: (userId: number, followed: boolean) => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const UsersContainer: React.FC<PropsType> = ({isFetching, ...props}) => {
    useEffect(() => {
        props.getUsers(props.totalPage, props.pageSize)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const swapPage = (page: number) => {
        props.getUsers(page, props.pageSize)
    }
    const selectPageSize = (e: any) => {
        if (e.target.localName === 'span') props.getUsers(props.totalPage, Number(e.target.innerHTML))
    }


    if (!props.pagesCount) {
        return <UsersPreloader/>
    }
    return <main className={classes.content}>
        {
            isFetching
                ? <>
                    < Paginator pagesCount={props.pagesCount} totalPage={props.totalPage} pageSize={props.pageSize}
                                swapPage={swapPage} selectPageSize={selectPageSize}/>
                    <UsersPreloader/>
                </>
                : <>
                    < Paginator pagesCount={props.pagesCount} totalPage={props.totalPage} pageSize={props.pageSize}
                                swapPage={swapPage} selectPageSize={selectPageSize}/>
                    <Users {...props} />
                </>
        }
    </main>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        myId: getMyUserId(state),					 								// Id аккаунта (моего)
        usersData: getUsersSelector(state),
        pagesCount: getPagesCountSelector(state),
        pageSize: getPagesSizeSelector(state),
        totalPage: getTotalPageSelector(state),
        isFollowingInProgress: getFollowingInProgressSelector(state),
        isFetching: getIsFetchingSelector(state),
    }
}


export default compose<React.Component>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {toggleFollow, getUsers}),
    withAuthRedirectComponent
)(UsersContainer)