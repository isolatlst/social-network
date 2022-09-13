import classes from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';

function Sidebar() {
	return (
		<nav className={classes.sidebar}>
			<ul className={classes.sidebar__list}>
				<li className={classes.sidebar__item}>
					<NavLink to='/profile' className={navData => navData.isActive ? classes.active : classes.sidebar__link} >
						Profile
					</NavLink>
				</li>
				<li className={classes.sidebar__item}>
					<NavLink to='/messages' className={navData => navData.isActive ? classes.active : classes.sidebar__link}>
						Messages
					</NavLink>
				</li>
				<li className={classes.sidebar__item}>
					<NavLink to='/news' className={navData => navData.isActive ? classes.active : classes.sidebar__link}>
						News
					</NavLink>
				</li>
				<li className={classes.sidebar__item}>
					<NavLink to='/users' className={navData => navData.isActive ? classes.active : classes.sidebar__link}>
						Users
					</NavLink>
				</li>
				<li className={classes.sidebar__item}>
					<NavLink to='/music' className={navData => navData.isActive ? classes.active : classes.sidebar__link}>
						Music
					</NavLink>
				</li>
				<li className={classes.sidebar__item}>
					<NavLink to='/settings' className={navData => navData.isActive ? classes.active : classes.sidebar__link}>
						Settings
					</NavLink>
				</li>
			</ul>
		</nav >
	);
}

export default Sidebar;