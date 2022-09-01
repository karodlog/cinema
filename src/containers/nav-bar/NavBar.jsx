import { Link } from "react-router-dom";
import style from './navBar.module.css'

const NavBar = () => {
    return (
        <nav className={style.nav}>
           <Link to="/search">Search</Link>
           <Link to="/popular">Popular</Link>
           <Link to="/nowplaying">Nowplaying</Link>
        </nav>
    );
};

export default NavBar;