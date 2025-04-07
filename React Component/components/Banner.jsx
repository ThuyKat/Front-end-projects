export default function Banner({bannerType,lineType,children}){
    return(
        <div className ={`banner ${bannerType} ${lineType}`}>
            {children}
        </div>
    )
}