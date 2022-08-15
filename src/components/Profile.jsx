function Profile() {
	return (
		<main className='profile'>
			<img className='profile__image' src='https://wallup.net/wp-content/uploads/2019/09/182467-yosemite.jpg' />
			<div className="profile-description">

			</div>
			<div className="profile-posts">
				<div className="profile-posts__item new-post"></div>
				<div className="profile-posts__item">Post 1</div>
				<div className="profile-posts__item">Post 2</div>
			</div>
		</main>
	);
}

export default Profile;