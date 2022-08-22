import classes from './Post.module.css'
import Avatar from '../../Avatar/Avatar'

function Post() {
	return (
		<div className={classes.posts__item}>
			<Avatar />
			<div>Some text</div>
		</div>
	);
}

export default Post;