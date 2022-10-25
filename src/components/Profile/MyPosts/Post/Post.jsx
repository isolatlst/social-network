import classes from './Post.module.css'
import Avatar from '../../../common/Avatar/Avatar'

function Post({ avatar, message, id, ...props }) {
	return (
		<div className={classes.posts__item}>
			{props.isMineProfile ? <div className={classes.deletePostButton} onClick={e => props.deletePost(id)}></div> : ''}
			<Avatar avatar={avatar} />
			<div className={classes.message}>{message}</div>
		</div>
	);
}


export default Post;