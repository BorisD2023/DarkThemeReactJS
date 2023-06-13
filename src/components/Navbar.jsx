import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../context/Context'
import DarkLight from "../assets/svg/dark-light";


const Navbar = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme((toggle) => !toggle)
    }
    console.log(theme);
    return ( 
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <div className="toggle" onClick={toggleTheme}>
                <DarkLight />
            </div>
            
        </header>
     );
}
 
export default Navbar;