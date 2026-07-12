import "./SpecialCard.css";

function SpecialCard({image, title, price, description}) {
    return (
        <div className="special-card">
            <img src={image} alt={title} />

            <div className="card-content">
                <div className="card-header">
                    <h3>{title}</h3>
                    <span>${price}</span>
                </div>

                <p>{description}</p>

                <button>Order a Delivery</button>
            </div>
        </div>
    )
}

export default SpecialCard;