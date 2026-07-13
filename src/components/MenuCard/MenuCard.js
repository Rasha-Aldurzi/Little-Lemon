import "./MenuCard.css";

function MenuCard({ image, title, description, price }) {
    return (
        <article className="menu-card">
            <img src={image} alt={title} />

            <div className="menu-card-content">
                <div className="menu-card-header">
                    <h3>{title}</h3>
                    <span>{price}</span>
                </div>

                <p>{description}</p>
            </div>
        </article>
    )
}

export default MenuCard;