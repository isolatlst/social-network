import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import withAuthRedirectComponent from '../common/HOCs/AuthRedirect/WithAuthRedirectComponent'
import {useParams} from 'react-router-dom'
import Profile from './Profile'
import {addProfilePost, deleteProfilePost, getProfile, updateProfile} from '../../redux/thunks/profile-thunk'
import ProfilePreloader from '../common/Preloaders/Profile/ProfilePreloader'
import ProfileForm from './ProfileForm/ProfileForm'
import {AppStateType} from "../../redux/redux-store";

export type DispatchPropsType = {
    getProfile: (userId: string | undefined, myId: number) => void
    updateProfile: () => void
    deleteProfilePost: () => void
    addProfilePost: () => void
}
export type MapStatePropsType = ReturnType<typeof mapStateToProps>

type PropsType = MapStatePropsType & DispatchPropsType


const ProfileContainer: React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {userId} = useParams()

    useEffect(() => {
        props.getProfile(userId, props.myId)
    }, [userId]) // eslint-disable-line react-hooks/exhaustive-deps

    return props.isFetching
        ? <ProfilePreloader/>
        : editMode
            ? <ProfileForm setEditMode={setEditMode}
                           avatar={props.avatar}
                           wallpaper={props.wallpaper}
                           birth={props.birth}
                           location={props.location}
                           education={props.education}
                           site={props.site}
                           updateProfile={props.updateProfile}
            />
            : <Profile {...props} setEditMode={setEditMode}/>
}

const mapStateToProps = (state: AppStateType) => {
    return {
        myId: state.auth.userId,										// Id аккаунта (моего)
        profileId: state.profilePage.userId,						    // Id профиля
        wallpaper: state.profilePage.wallpaper,
        name: `${state.profilePage.firstName} ${state.profilePage.lastName}`,
        birth: state.profilePage.birth,
        location: state.profilePage.location,
        education: state.profilePage.education,
        site: state.profilePage.site,
        avatar: state.profilePage.avatar,
        postsData: state.profilePage.postsData,
        isFetching: state.profilePage.isFetching
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, updateProfile, deleteProfilePost, addProfilePost}),
    withAuthRedirectComponent<PropsType>
)(ProfileContainer)