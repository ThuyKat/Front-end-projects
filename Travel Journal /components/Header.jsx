import globeImage from '../images/globe.png'    

export default function Header(){
    return(
       <header>
            <img className="globe-icon" src={globeImage} alt="globe icon" />
            <p>my travel journal.</p>
        </header>
    )
}