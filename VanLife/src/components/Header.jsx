import {Link} from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
export default function Header(){
    return(
        <header>
            <nav>
                <Link to="/"><h1 >#VanLife</h1></Link>
                <ul>
                    
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/vans">Vans</Link>
                    </li>
                    <li>
                        <Link to="/host">Host</Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <p style={{ display: "flex", alignItems: "baseline",fontSize:"1.2rem",fontWeight:"600"}}><CgProfile /></p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}