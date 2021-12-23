import classes from './header.module.css';
import logo from '../Media/kilowott.svg';
import { Link } from 'react-router-dom';

function Header() {
    return <div>
        <div className = {classes.pgHead}>
            <Link to = '/'><img src={logo} alt ="Kilowott" className= {classes.logo} /> </Link>
        </div>
    </div>
}
export default Header;