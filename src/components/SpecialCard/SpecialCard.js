import "./SpecialCard.css";
import { NavLink } from "react-router-dom";

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

                <NavLink to="/order-online" className="delivery-btn">
                    Order a Delivery
                </NavLink>
            </div>
        </div>
    )
}

export default SpecialCard;