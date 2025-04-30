import { useParams,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export default function VanDetails() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const location= useLocation();
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response.data);
        return response.json();
      })
      .then((data) => {
        setVan(data.vans);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="van-detail-container">
        <Link
                to={`..${location.state?.search || ""}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
      <img src={van.imageUrl} alt={`image of van id ${id}`} />
      <div className="van-detail-info">
        <div className={`van-type ${van.type}`}>
            {van.type}
        </div>
        <p className="strong-text">{van.name}</p>
        <p className="van-price"> <span className="strong-text"> ${van.price}</span>/day</p>
        <p>{van.description}</p>
        <button>Rent this van</button>
      </div>
    </div>
  );
}
