import image from "../assets/image-about.png";
export default function About() {
  return (
    <>
      <section className="about">
        <img src={image} width="100%" />
        <div className="content-container">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <div>
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="action">
            <p>Your destination is waiting.</p>
            <p>Your van is ready.</p>
            <button>Explore our vans</button>
          </div>
        </div>
      </section>
    </>
  );
}
