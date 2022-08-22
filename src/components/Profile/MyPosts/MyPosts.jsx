import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
	return (
		<div className={classes.profilePosts}>
			<div className={classes.newPost}>
				<textarea name="" id="" />
				<button role='button'>Add post</button>
			</div>
			<div className={classes.posts__list}>
				< Post />
			</div>
		</div>
	);
}

export default MyPosts;