import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
	return (
		<div className={classes.profilePosts}>
			<div className={classes.title}>My posts</div>
			{
				props.isMineProfile
					? <div className={classes.newPost}>
						<textarea onChange={props.updateNewPost} value={props.newPostText} placeholder='type something interesting...' />
						<button disabled={!props.newPostText} className={classes.button} onClick={props.addNewPost}>Add post</button>
					</div>
					: ''
			}
			<div className={classes.posts__list}>
				{props.postsData.map(post => < Post key={post.id} message={post.post} avatar={props.avatar} />)}
			</div>
		</div>
	);
}

export default MyPosts;