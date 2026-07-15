import "./OrderOnline.css";

import MenuCard from "../MenuCard/MenuCard";

import greekSalad from "../../assets/images/greek-salad.jpg";
import bruschetta from "../../assets/images/burschetta.jpg";
import lemonDessert from "../../assets/images/lemon-dessert.jpeg";

function OrderOnline() {
  const dishes = [
    {
      image: greekSalad,
      title: "Greek Salad",
      description:
        "Fresh lettuce, tomatoes, cucumbers, olives, feta cheese and our homemade dressing.",
      price: "$12.99",
    },
    {
      image: bruschetta,
      title: "Bruchetta",
      description:
        "Grilled bread with garlic, tomatoes, olive oil and fresh basil.",
      price: "$5.99",
    },
    {
      image: lemonDessert,
      title: "Lemon Dessert",
      description:
        "Traditional homemade lemon cake served with whipped cream.",
      price: "$5.00",
    },
  ];

  return (
    <section className="order-online">
      <h1>Order Online</h1>

      <p>
        Enjoy your favorite Little Lemon dishes from the comfort of your home.
      </p>

      <div className="order-online-grid">
        {dishes.map((dish) => (
          <MenuCard
            key={dish.title}
            image={dish.image}
            title={dish.title}
            description={dish.description}
            price={dish.price}
          />
        ))}
      </div>
    </section>
  );
}

export default OrderOnline;