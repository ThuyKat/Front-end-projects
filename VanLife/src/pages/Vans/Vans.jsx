import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response.data);
        return response.json();
      })
      .then((data) => {
        setVans(data.vans);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  const vansElements = vans.map((van) => (
    <Link to={`/vans/${van.id}`} key={van.id} 
    aria-label={`View details for ${van.name}, 
    priced at $${van.price} per day`}>
      <div className="van-card">
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        <div className="van-info">
          <p>
              {van.name} 
              <span>${van.price}</span>
          </p>
          <p className="text-small">/day</p>
          
        </div>
          <p className={`van-type ${van.type}`}>{van.type}</p>
      </div>
    </Link>
  ))
  return (
    <div className="vans-parent-container">
      <h1>Explore our van options</h1>
      <div className="vans-container">
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        {!loading && !error && (
          <div className="vans-list">
            {vansElements}
          </div>
        )}
      </div>
    </div>
  );
}
