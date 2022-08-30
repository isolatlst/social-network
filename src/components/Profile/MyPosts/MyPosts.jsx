import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
	let posts = props.postsData.map(post => < Post message={post.post} avatar={props.avatar} />)


	return (
		<div className={classes.profilePosts}>
			<div className={classes.title}>My posts</div>
			<div className={classes.newPost}>
				<textarea name="" id="" placeholder='type something interesting...' />
				<button role='button'>Add post</button>
			</div>
			<div className={classes.posts__list}>
				{posts}
			</div>
		</div>
	);
}

export default MyPosts;