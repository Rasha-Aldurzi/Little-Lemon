import "./About.css";
import restaurant from "../../assets/images/restaurant.jpg";
import chefs from "../../assets/images/chefs.jpg";

function About() {
  return (
    <main className="about-page">
      <section className="about">
        <div className="about-content">
          <h1>About Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern touch.
            We use fresh ingredients and prepare every dish with care to create a memorable dining experience.
          </p>

          <p>
            Our mission is to bring people together through delicious food, warm bospitality, and authentic Mediterranean flavors.
          </p>
        </div>

        <div className="about-images">
          <img src={restaurant} alt="Little Lemon Restaurant" />
          <img src={chefs} alt="Little Lemon Chefs" />
        </div>
      </section>
    </main>
  )
}

export default About;