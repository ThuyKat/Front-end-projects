import {Link} from 'react-router-dom'
export default function Nav(){
    return(
        <>
            <nav>
                <Link to="/"><h1 >#VanLife</h1></Link>
                <ul>
                    
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/vans">Vans</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}