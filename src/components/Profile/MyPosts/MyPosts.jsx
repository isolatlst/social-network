import { Field, reduxForm } from 'redux-form'
import { maxLength150 } from '../../common/validators/validators'
import { Textarea } from '../../common/FormControls/FormControls'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
	let onAddNewPost = (formData) => { props.addNewPost(formData.newPostData) }
	return (
		<div className={classes.profilePosts}>
			<div className={classes.title}>
				{props.isMineProfile ? 'My posts' : props.postsData.length ? 'My posts' : 'The user did not add posts to the wall'}
			</div>
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
			<Field component={Textarea} name='newPostData' placeholder='type something interesting...'
				validate={[maxLength150]} maxLength={150} />
			<button className={classes.button}>Add post</button>
		</form >
	)
}
const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPost' })(AddNewPostForm)

export default MyPosts;