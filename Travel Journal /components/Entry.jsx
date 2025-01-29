export default function Entry(props){
    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img src={props.img}/>
            </div>
            <div className="detail-container">
                
                <img src="../images/marker.png" alt="marker-icon"/>
                <span>{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.dates}</p>
                <p className="text">{props.text}</p>
            </div>
        
        </article>
    )
}