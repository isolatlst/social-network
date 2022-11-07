import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Description from './Description/Description'
import React from "react"
import {DispatchPropsType, MapStatePropsType} from "./ProfileContainer";

type OwnProps = {
    setEditMode: (isEditMode: boolean) => void
}
type PropsType = DispatchPropsType & MapStatePropsType & OwnProps

const Profile: React.FC<PropsType> = (props) => {
    // props.userId === props.profileId
    //true - my profile; false - alien profile
    return (
        <main className={classes.content}>
            < Description
                isMineProfile={props.myId === props.profileId}
                avatar={props.avatar}
                setEditMode={props.setEditMode}

                wallpaper={props.wallpaper}
                name={props.name}
                birth={props.birth}
                location={props.location}
                education={props.education}
                site={props.site}
            />
            < MyPosts
                isMineProfile={props.myId === props.profileId}
                avatar={props.avatar}

                postsData={props.postsData}
                addProfilePost={props.addProfilePost}
                deleteProfilePost={props.deleteProfilePost}
            />
        </main>
    )
}

export default Profile;