import classes from './Post.module.css'
import Avatar from '../../../common/Avatar/Avatar'

function Post(props) {
	return (
		<div className={classes.posts__item}>
			<div className={classes.deletePostButton} onClick={e => props.deletePost(props.id)}></div>
			<Avatar avatar={props.avatar} />
			<div>{props.message}</div>
		</div>
	);
}


export default Post;