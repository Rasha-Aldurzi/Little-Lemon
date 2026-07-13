import "./Reservation.css";

function Reservation() {
    return (
        <section className="reservation">
            <h1>Reserve a Table</h1>
            <p>Book your table and enjoy an authentic Mediterranean dining experience.</p>

            <form className="reservation-form">
                <lable htmlFor="date">Date</lable>
                <input type="date" id="date" />

                <lable htmlFor="time">Time</lable>
                <select id="time">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                </select>

                <label htmlFor="guests">Number of Guests</label>
                <input type="number" id="guests" min="1" max="10" />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <button type="submit">Reserve Table</button>
            </form>
        </section>
    );
}

export default Reservation;