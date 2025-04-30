import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
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
  // Filter vans based on the type selected
  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;
  const vansElements = filteredVans.map((van) => (
    <Link
      to={van.id}
      key={van.id}
      aria-label={`View details for ${van.name}, 
    priced at $${van.price} per day`}
    >
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
  ));
  const handleFilterByType = (key, value) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev); // searchParams is read-only, can be used here but its safer to use URLSearchParams
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      return params;
    });
  };
  return (
    <div className="vans-parent-container">
      <h1>Explore our van options</h1>
      <button onClick={() => handleFilterByType("type", "simple")}
      className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>
        Simple
      </button>
      <button onClick={() => handleFilterByType("type", "luxury")}
      className={`van-type luxury ${typeFilter === "simple" ? "selected" : ""}`}>
        Luxury
      </button>
      <button onClick={() => handleFilterByType("type", "rugged")}
      className={`van-type rugged ${typeFilter === "simple" ? "selected" : ""}`}>
        Rugged
      </button>
      {typeFilter && (
        <button onClick={() => handleFilterByType("type", null)}
        className="van-type clear-filters">
          Clear filters
        </button>
      )}
      <div className="vans-container">
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        {!loading && !error && <div className="vans-list">{vansElements}</div>}
      </div>
    </div>
  );
}
