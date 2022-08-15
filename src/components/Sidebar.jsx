function Sidebar() {
	return (
		<nav className='sidebar'>
			<ul className='sidebar__list'>
				<li className='sidebar__item'>
					<a className='sidebar__link'>
						Profile
					</a>
				</li>
				<li className='sidebar__item'>
					<a className='sidebar__link'>
						Messages
					</a>
				</li>
				<li className='sidebar__item'>
					<a className='sidebar__link'>
						News
					</a>
				</li>
				<li className='sidebar__item'>
					<a className='sidebar__link'>
						Music
					</a>
				</li>
				<li className='sidebar__item'>
					<a className='sidebar__link'>
						Settings
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Sidebar;