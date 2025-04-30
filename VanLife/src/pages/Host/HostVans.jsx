import {useState, useEffect} from "react";
import {Link} from "react-router-dom"
export default function HostVans(){
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => {
                if(!res.ok){
                    throw new Error("Failed to fetch data")
                }
                return res.json()
            })
            .then(data => {
                setVans(data.vans)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])
    const vansElements = vans.map(van => {
        return(
            <Link to={van.id} key={van.id}>
            <div className="host-van" key={van.id}>
                <img src={van.imageUrl} alt={van.name} />
                <div className="host-van-info">
                    <p className="van-name">{van.name}</p>
                    <p className="van-price">${van.price}/day</p>
                </div>
            </div>
            </Link>
        )
    })
    return(
        <div className='host-vans-container'>
            <h1>Your listed vans</h1>
            <div className="host-vans-list">
                {loading && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {vansElements}
            </div>
        </div>

    )
}