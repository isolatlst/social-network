import { Field, reduxForm } from 'redux-form'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
	let onAddNewPost = (formData) => { props.addNewPost(formData.newPostData) }
	return (
		<div className={classes.profilePosts}>
			<div className={classes.title}>My posts</div>
			{
				props.isMineProfile
					? <AddNewPostReduxForm onSubmit={onAddNewPost} />
					: ''
			}
			<div className={classes.posts__list}>
				{props.postsData.map(post => < Post key={post.id} message={post.post} avatar={props.avatar} />)}
			</div>
		</div>
	);
}



const AddNewPostForm = (props) => {
	return (
		<form className={classes.newPost} onSubmit={props.handleSubmit}>
			<Field component='textarea' name='newPostData' placeholder='type something interesting...' />
			<button className={classes.button}>Add post</button>
		</form >
	)
}
const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPost' })(AddNewPostForm)

export default MyPosts;