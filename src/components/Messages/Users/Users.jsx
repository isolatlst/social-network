import User from './User/User';
import classes from './Users.module.css'

function Users() {
	let usersData = [
		{ id: 1, name: 'Dennis', avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg' },
		{ id: 2, name: 'Vasya', avatar: 'https://funart.pro/uploads/posts/2021-03/1617075469_18-p-oboi-natsionalnii-park-gleisher-19.jpg' },
		{ id: 3, name: 'Egor', avatar: 'https://www.anepedia.org/img/3/3838310/i2/Фото_прикол_про_белку.jpg' },
		{ id: 4, name: 'Kirill', avatar: 'https://ic.pics.livejournal.com/globolife/59791984/361662/361662_original.jpg' },
		{ id: 5, name: 'Vlad', avatar: 'https://pressa.tv/uploads/posts/2019-01/1548187434_pressa_tv_foto-prikoly-21.jpg' }
	]

	let users = usersData.map(user => < User path_id={user.id} friend__avatar={user.avatar} friend__name={user.name} />)

	return (
		<div className={classes.users}>
			{users}
		</div>
	);
}

export default Users;