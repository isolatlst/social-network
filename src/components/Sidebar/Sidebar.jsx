import classes from './Sidebar.module.css'

function Sidebar() {
	return (
		<nav className={classes.sidebar}>
			<ul className={classes.sidebar__list}>
				<li className={classes.sidebar__item}>
					<a className={classes.sidebar__link}>
						Profile
					</a>
				</li>
				<li className={classes.sidebar__item}>
					<a className={classes.sidebar__link}>
						Messages
					</a>
				</li>
				<li className={classes.sidebar__item}>
					<a className={classes.sidebar__link}>
						News
					</a>
				</li>
				<li className={classes.sidebar__item}>
					<a className={classes.sidebar__link}>
						Music
					</a>
				</li>
				<li className={classes.sidebar__item}>
					<a className={classes.sidebar__link}>
						Settings
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Sidebar;