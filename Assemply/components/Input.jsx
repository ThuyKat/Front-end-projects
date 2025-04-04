export default function Input(props){

    const conditionalClass = !props.isShown? "hidden":null
    return(
        <div className ="input-container">
            <div className= {conditionalClass}>
            {props.char}
            </div>
        </div>
    )
}