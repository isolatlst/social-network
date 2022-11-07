import {InjectedFormProps, reduxForm} from 'redux-form'
import {maxLength150, requiredField} from '../../common/validators/validators'
import {createField, Textarea} from '../../common/FormControls/FormControls'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {PostType} from "../../../types/state-types";
import React from "react";
import {NewPostType} from "../../../types/forms";

type PropsType = {
    isMineProfile: boolean
    avatar: string
    postsData: Array<PostType>
    addProfilePost: (postText: string, formName: 'profileAddNewPost') => void
    deleteProfilePost: (postId: number) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    const addNewPost = ({newPostData}: { newPostData: string }) => {
        props.addProfilePost(newPostData, 'profileAddNewPost')
    }
    const deletePost = (postId: number) => {
        props.deleteProfilePost(postId)
    }

    return (
        <div className={classes.profilePosts}>
            <div className={classes.title}>
                {props.isMineProfile ? 'My posts' : props.postsData.length ? 'My posts' : 'The user did not add posts to the wall'}
            </div>
            {
                props.isMineProfile && <AddNewPostReduxForm onSubmit={addNewPost}/>
            }
            <div className={classes.posts__list}>
                {props.postsData.map(post => < Post key={post.id} id={post.id} message={post.post} avatar={props.avatar} isMineProfile={props.isMineProfile} deletePost={deletePost}/>)}
            </div>
        </div>
    );
}


const AddNewPostForm: React.FC<InjectedFormProps<NewPostType>> = (props) => {
    return (
        <form className={classes.newPost} onSubmit={props.handleSubmit}>
            {createField(Textarea, [maxLength150, requiredField], 'type something interesting...', 'newPostData', '', '', {maxLength: 150})}
            <button className={classes.button}>Add post</button>
        </form>
    )
}
const AddNewPostReduxForm = reduxForm<NewPostType>({form: 'profileAddNewPost'})(AddNewPostForm)

export default MyPosts;