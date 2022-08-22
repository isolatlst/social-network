import classes from './Post.module.css'
import Avatar from '../../Avatar/Avatar'

function Post(props) {
	return (
		<div className={classes.posts__item}>
			<Avatar />
			<div>{props.message}</div>
		</div>
	);
}

export default Post;