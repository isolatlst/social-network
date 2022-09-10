import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';
import { addPostACreator, updateNewPostACreator } from '../../../redux/actionCreators/profile-action-creator'

function MyPosts(props) {
	let addPostInState = () => {
		props.dispatch(addPostACreator(''))
	}
	let onPostChange = (event) => {
		props.dispatch(updateNewPostACreator(event.target.value))
	}

	let posts = props.postsData.map(post => < Post message={post.post} avatar={props.avatar} />)

	return (
		<div className={classes.profilePosts}>
			<div className={classes.title}>My posts</div>
			<div className={classes.newPost}>
				<textarea onChange={onPostChange} value={props.newPostText} placeholder='type something interesting...' />
				<button role='button' onClick={addPostInState}>Add post</button>
			</div>
			<div className={classes.posts__list}>
				{posts}
			</div>
		</div>
	);
}

export default MyPosts;