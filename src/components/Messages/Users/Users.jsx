import User from './User/User';
import classes from './Users.module.css'

function Users() {
	return (
		<div className={classes.users}>
			< User path_id='1' avatar__link='https://a.d-cd.net/bEAAAgDEreA-1920.jpg' user__name='Dennis' />
			< User path_id='2' avatar__link='https://funart.pro/uploads/posts/2021-03/1617075469_18-p-oboi-natsionalnii-park-gleisher-19.jpg' user__name='Vasya' />
			< User path_id='3' avatar__link='https://www.anepedia.org/img/3/3838310/i2/Фото_прикол_про_белку.jpg' user__name='Egor' />
			< User path_id='4' avatar__link='https://ic.pics.livejournal.com/globolife/59791984/361662/361662_original.jpg' user__name='Kirill' />
			< User path_id='5' avatar__link='https://pressa.tv/uploads/posts/2019-01/1548187434_pressa_tv_foto-prikoly-21.jpg' user__name='Vlad' />
		</div>
	);
}

export default Users;