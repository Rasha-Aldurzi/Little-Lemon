import "./Testimonials.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

import customer1 from "../../assets/images/customer1.jpeg";
import customer2 from "../../assets/images/customer2.jpeg";
import customer3 from "../../assets/images/customer3.jpeg";
import customer4 from "../../assets/images/customer4.jpeg";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say!</h2>

      <div className="testimonials-container">
        <TestimonialCard
          image={customer1}
          name="Sarah"
          rating="★★★★★"
          review="Amazing food and excellent service!"
        />

        <TestimonialCard
          image={customer2}
          name="Michael"
          rating="★★★★★"
          review="The Greek Salad is my favorite. Highly recommended."
        />

        <TestimonialCard
          image={customer3}
          name="Emily"
          rating="★★★★☆"
          review="A wonderful atmosphere with delicious Mediterranean dishes."
        />

        <TestimonialCard
          image={customer4}
          name="John"
          rating="★★★★★"
          review="I'll definitely come back again!"
        />
      </div>
    </section>
  );
}

export default Testimonials;