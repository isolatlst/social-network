import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
	return (
		<div className={classes.profilePosts}>
			<div className={classes.title}>My posts</div>
			<div className={classes.newPost}>
				<textarea name="" id="" placeholder='type something interesting...' />
				<button role='button'>Add post</button>
			</div>
			<div className={classes.posts__list}>
				< Post message='Hello! Its my social network' />
				< Post message='I try to learning react' />
			</div>
		</div>
	);
}

export default MyPosts;