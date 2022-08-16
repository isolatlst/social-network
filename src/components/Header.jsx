import logo from '../logo.svg'
import classes from './Header.module.css'


function Header() {
	return (
		<header className={classes.header}>
			<img src={logo} className={classes.header__logo} alt="logo" />
		</header>
	);
}


export default Header;