import classes from './Sidebar.module.css'
import {NavLink} from 'react-router-dom';

function Sidebar({myId}: { myId: number }) {
    return (
        <nav className={classes.sidebar}>
            <ul className={classes.sidebar__list}>
                <li className={classes.sidebar__item}>
                    <NavLink to={`/profile/${myId}`} className={navData => navData.isActive ? classes.active : classes.sidebar__link}>
                        Profile
                    </NavLink>
                </li>
                <li className={classes.sidebar__item}>
                    <NavLink to='/messages' className={navData => navData.isActive ? classes.active : classes.sidebar__link}>
                        Messages
                    </NavLink>
                </li>
                <li className={classes.sidebar__item}>
                    <NavLink to='/users' className={navData => navData.isActive ? classes.active : classes.sidebar__link}>
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;