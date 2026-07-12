import "./Hero.css";
import heroImage from "../../assets/images/hero-image.jpg";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>

                <p>
                    We are a family-owned Mediterranean restaurant 
                    focused on traditional recipes served with a modern twist.
                </p>

                <button>Reserve a Table</button>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Delicious Mediterranean food" />
            </div>
        </section>
    )
}

export default Hero;