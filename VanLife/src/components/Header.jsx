import {Link,NavLink} from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <header>
            <nav>
                <Link to="/"><h1 >#VanLife</h1></Link>
                <ul>
                    
                    <li>
                        <NavLink to="/about" style={({isActive}) => isActive ? activeStyles : null} >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/vans"  style={({isActive}) => isActive ? activeStyles : null}>Vans</NavLink>
                    </li>
                    <li>
                        <NavLink to="/host" style={({isActive}) => isActive ? activeStyles : null}>Host</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" style={({isActive}) => isActive ? activeStyles : null}>
                            <p style={{ display: "flex", alignItems: "baseline",fontSize:"1.2rem",fontWeight:"600"}}><CgProfile /></p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}