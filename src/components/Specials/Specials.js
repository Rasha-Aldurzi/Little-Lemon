import "./Specials.css";
import SpecialCard from "../SpecialCard/SpecialCard";

import greekSalad from "../../assets/images/greek-salad.jpg";
import bruschetta from "../../assets/images/burschetta.jpg";
import lemonDessert from "../../assets/images/lemon-dessert.jpeg";

function Specials() {
    return (
        <section className="specials">
            <div className="specials-header">
                <h2>This week's specials!</h2>
                <button>Online Menu</button>
            </div>

            <div className="specials-cards">
                <SpecialCard image={greekSalad} title="Greek Salad" price="12.99"
                description="The famous Greek salad with crispy lettuce, pepers, olives and our
                chicago style feta cheese." />

                <SpecialCard image={bruschetta} title="Bruschetta" price="5.99"
                description="Our Bruschetta is made from grilled bread that has been smeared with garlic
                and seasoned with salt and olive oil"/>

                <SpecialCard image={lemonDessert} title="Lemon Dessert" price="5.00"
                description="This comes straight from grandma's recipe book, every last ingredient has
                been sourced and is as authentic as can be." />
            </div>
        </section>
    )
}

export default Specials;