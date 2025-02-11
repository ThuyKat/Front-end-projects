export default function Dice(props){
    // Create array of dots based on value
    const dots = Array(props.value).fill(<div className="dot"></div>)
    return(
        <button 
        style={{backgroundColor:props.isHeld?"green":"white"}}
        onClick={props.onClick}
        className={`dice-${props.value}`}
        >{dots}
        </button>
    )
}