import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';

function MyPosts(props) {
	let textarea = React.createRef();

	let addPostHndlr = () => {
		let text = textarea.current.value
		props.addPost(text)
		textarea.current.value = ''
	}

	let posts = props.postsData.map(post => < Post message={post.post} avatar={props.avatar} />)

	return (
		<div className={classes.profilePosts}>
			<div className={classes.title}>My posts</div>
			<div className={classes.newPost}>
				<textarea name="" id='' ref={textarea} placeholder='type something interesting...' />
				<button role='button' onClick={addPostHndlr}>Add post</button>
			</div>
			<div className={classes.posts__list}>
				{posts}
			</div>
		</div>
	);
}

export default MyPosts;