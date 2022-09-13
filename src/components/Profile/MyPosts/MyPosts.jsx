import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
	let onAddPost = () => { props.addNewPost() }

	let onPostChange = (event) => { props.updateNewPost(event.target.value) }

	let posts = props.postsData.map(post => < Post key={post.id} message={post.post} avatar={props.avatar} />)

	return (
		<div className={classes.profilePosts}>
			<div className={classes.title}>My posts</div>
			<div className={classes.newPost}>
				<textarea onChange={onPostChange} value={props.newPostText} placeholder='type something interesting...' />
				<button className={classes.button} onClick={onAddPost}>Add post</button>
			</div>
			<div className={classes.posts__list}>
				{posts}
			</div>
		</div>
	);
}

export default MyPosts;