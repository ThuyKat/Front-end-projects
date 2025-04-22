import { useState, useEffect } from "react";
import { useParams, Outlet, NavLink, Link } from "react-router-dom";
export default function HostVanDetails() {
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.vans[0]);
        setVan(data.vans[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [params.id])
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <>
      <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
      <div className="host-van-detail-container">
        <div className="van-card">
          <img src={van.imageUrl} alt={`Image of ${van.name}`} />
          <div>
            <p className={`van-type ${van.type}`}>{van.type}</p>
            <p className="van-name">{van.name}</p>
            <p className="van-price">
              ${van.price}
              <span className="text-small">/day</span>
            </p>
          </div>
        </div>
        <nav>
          <NavLink to="."  style={({isActive})=> isActive?activeStyles:null} end>
            Details
          </NavLink>
          <NavLink to="pricing" style={({isActive})=> isActive?activeStyles:null}>
            Pricing
          </NavLink>
          <NavLink to="photos" style={({isActive})=> isActive?activeStyles:null}>
            Photos
          </NavLink>
        </nav>
          <Outlet/>
      </div>
    </>
  );
}
