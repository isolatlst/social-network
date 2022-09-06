import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';

function MyPosts(props) {
	let textarea = React.createRef();

	let addPostInState = () => {
		props.addPost()
		props.updateNewPostText('')
	}
	let onPostChange = () => {
		let text = textarea.current.value
		props.updateNewPostText(text)
	}

	let posts = props.postsData.map(post => < Post message={post.post} avatar={props.avatar} />)

	return (
		<div className={classes.profilePosts}>
			<div className={classes.title}>My posts</div>
			<div className={classes.newPost}>
				<textarea ref={textarea} onChange={onPostChange} value={props.newPostText} placeholder='type something interesting...' />
				<button role='button' onClick={addPostInState}>Add post</button>
			</div>
			<div className={classes.posts__list}>
				{posts}
			</div>
		</div>
	);
}

export default MyPosts;