import "./TestimonialCard.css";

function TestimonialCard({ image, name, rating, review }) {
    return (
        <div className="testimonial-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="rating">
                {rating}
            </div>
            <p>{review}</p>
        </div>
    );
}

export default TestimonialCard;