export default function Char(props){
    return(
        <button className="letter-container" onClick={props.onClick} id={props.index}>{props.letter} </button>
    )
}