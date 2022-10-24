import { useState } from 'react'
import { reduxForm } from 'redux-form'
import { maxLength150 } from '../../common/validators/validators'
import { createField, Textarea } from '../../common/FormControls/FormControls'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { useEffect } from 'react'

function MyPosts(props) {
	const [newPostInProgress, setNewPostProgress] = useState(false)
	useEffect(() => {
		setNewPostProgress(false)
	}, [props.postsData.length])

	let addNewPost = (formData) => {
		setNewPostProgress(true);
		props.updateProfile(formData.newPostData, 'postsData', props.userId, 'profileAddNewPost');
	}
	let deletePost = (postId) => { props.deleteProfilePost(postId, props.userId) }

	return (
		<div className={classes.profilePosts}>
			<div className={classes.title}>
				{props.isMineProfile ? 'My posts' : props.postsData.length ? 'My posts' : 'The user did not add posts to the wall'}
			</div>
			{
				props.isMineProfile
					? <AddNewPostReduxForm onSubmit={addNewPost} newPostInProgress={newPostInProgress} />
					: ''
			}
			<div className={classes.posts__list}>
				{props.postsData.map(post => < Post key={post.id} id={post.id} message={post.post} avatar={props.avatar} isMineProfile={props.isMineProfile} deletePost={deletePost} />)}
			</div>
		</div>
	);
}



const AddNewPostForm = (props) => {
	return (
		<form className={classes.newPost} onSubmit={props.handleSubmit}>
			{createField(Textarea, [maxLength150], 'type something interesting...', 'newPostData', '', '', { maxLength: 150 })}
			<button disabled={props.newPostInProgress} className={classes.button}>Add post</button>
		</form >
	)
}
const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPost' })(AddNewPostForm)

export default MyPosts;