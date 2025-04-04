export default function Language(props){
    const langStyle = {
        color:props.color,
        backgroundColor:props.backgroundColor,
        opacity: props.isGone ? "30%" : "100%"
    }
    const deadLangStyle ={
        opacity: props.isGone ? "1" : "0"
    }   
    return(
        <div className="language-container">
            <div style={langStyle} className="language">
                {props.name}  
            </div>
            <div style={deadLangStyle} className="dead-language">💀</div>
        </div>
    )
}