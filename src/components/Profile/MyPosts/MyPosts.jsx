import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
	let avatar = props.avatar
	let postsData = [
		{ id: 1, post: 'I try to learning react' },
		{ id: 2, post: 'Hello! Its my social network' }
	]

	let posts = postsData.map(post => < Post message={post.post} avatar={avatar} />)


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