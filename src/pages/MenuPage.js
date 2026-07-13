import "./MenuPage.css"
import MenuCard from "../components/MenuCard/MenuCard";

import greekSalad from "../assets/images/greek-salad.jpg";
import bruschetta from "../assets/images/burschetta.jpg";
import lemonDessert from "../assets/images/lemon-dessert.jpeg";

function MenuPage() {
  const menuItems = [
        {
            id: 1,
            title: "Greek Salad",
            description: "Fresh vegetables, feta cheese, and our special Mediterranean dressing.",
            price: "$12.99",
            image: greekSalad
        },
        {
            id: 2,
            title: "Bruschetta",
            description: "Grilled bread topped with tomatoes, herbs, and olive oil.",
            price: "$8.99",
            image: bruschetta
        },
        {
            id: 3,
            title: "Lemon Dessert",
            description: "A sweet and refreshing dessert with a delicious lemon flavor.",
            price: "$6.99",
            image: lemonDessert
        }
    ];

    return (
      <main className="menu-page">
        <section className="menu-header">
          <h1>Our Menu</h1>
          <p>Discover our delicious Mediterranean dishes made with fresh ingredients.</p>
        </section>

        <section className="menu-container">
          {menuItems.map((item) => (<MenuCard key={item.id} image={item.image} title={item.title} description={item.description} price={item.price}/>))}
        </section>
      </main>
    )
}

export default MenuPage;