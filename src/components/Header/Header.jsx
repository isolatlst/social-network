import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import Avatar from '../common/Avatar/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/thunks/auth-thunk'


function Header() {
	const { avatar, authStatus } = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const logout = () => { dispatch(logOut()) }


	return (
		<header className={classes.header}>
			<img src={logo} className={classes.header__logo} alt="logo" />
			{
				authStatus
					? <div className={classes.logout}>
						< Avatar avatar={avatar} />
						<div className={classes.link} onClick={logout}>Log out</div>
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