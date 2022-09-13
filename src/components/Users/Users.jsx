import classes from './Users.module.css'
import Avatar from '../Profile/Avatar/Avatar'

function Users(props) {
	if (props.usersData.length === 0) {
		props.setUsers(
			[
				{ id: 1, followed: true, name: 'Dennis', avatar: 'https://a.d-cd.net/bEAAAgDEreA-1920.jpg', location: { city: 'Minsk', country: 'Belarus' } },
				{ id: 2, followed: true, name: 'Vasya', avatar: 'https://funart.pro/uploads/posts/2021-03/1617075469_18-p-oboi-natsionalnii-park-gleisher-19.jpg', location: { city: 'Minsk', country: 'Belarus' } },
				{ id: 3, followed: false, name: 'Egor', avatar: 'https://www.anepedia.org/img/3/3838310/i2/Фото_прикол_про_белку.jpg', location: { city: 'Minsk', country: 'Belarus' } },
				{ id: 4, followed: false, name: 'Kirill', avatar: 'https://ic.pics.livejournal.com/globolife/59791984/361662/361662_original.jpg', location: { city: 'Minsk', country: 'Belarus' } },
				{ id: 5, followed: true, name: 'Vlad', avatar: 'https://pressa.tv/uploads/posts/2019-01/1548187434_pressa_tv_foto-prikoly-21.jpg', location: { city: 'Minsk', country: 'Belarus' } }
			]
		)
	}
	return <div className={classes.users}>
		{
			props.usersData.map(user =>
				<div className={classes.users__item} key={user.id}>
					<button className={classes.status_button} onClick={() => props.toggleFollow(user.id)}>{user.followed ? 'unfollow' : 'follow'}</button>
					<div className={classes.avatar}>
						< Avatar avatar={user.avatar} />
					</div>
					<div className={classes.name}>{user.name}</div>
					<div className={classes.location}>{user.location.country}, {user.location.city}</div>
				</div>
			)
		}
	</div >
}

export default Users;

