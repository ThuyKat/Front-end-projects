export default function Tooltip({children,style,color}){


    let textColor = `var(--light-tooltip-${color})`
    let backgroundColor = `var(--bold-tooltip-${color})`
    if(style==='light'){
        [textColor,backgroundColor] = [backgroundColor,textColor]
    }
    const styles={
        color:textColor,
        backgroundColor:backgroundColor
    }
    
    return(
        <div style={styles} className={`tooltip ${style}`}>
                {children}
        </div>
    )
}