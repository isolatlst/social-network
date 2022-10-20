import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import Avatar from '../common/Avatar/Avatar'


function Header({ avatar, auth, ...props }) {
	return (
		<header className={classes.header}>
			<img src={logo} className={classes.header__logo} alt="logo" />
			{
				auth
					? <div className={classes.logout}>
						< Avatar avatar={avatar} />
						<div className={classes.link} onClick={e => props.logOut()}>Log out</div>
					</div>
					: <div className={classes.login}>
						<NavLink to='/auth' className={classes.link} >
							Autorhize
						</NavLink>
					</div>
			}
		</header>
	);
}


export default Header;