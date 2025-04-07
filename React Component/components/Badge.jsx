import classNames from 'classnames'
export default function Badge({children,...rest}){

    const shapeClass = rest.shape
    const colorClass = rest.color
    const allClasses = classNames(shapeClass, colorClass)

    return(
        <button className={allClasses}>
            {children}
        </button>
    )
}