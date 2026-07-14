import { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import "./Reservation.css";

function updateTimes(state, action) {
    return fetchAPI(new Date(action));
}

function Reservation() {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const navigate = useNavigate();

    const initializeTimes = () => {
        return fetchAPI(new Date());
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

 const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
        date,
        time,
        guests,
        occasion
    };

    const result = submitAPI(formData);

    if (result) {
        navigate("/confirmed");
    } else {
        console.log("Booking failed");
    }
};
    return (
        <section className="reservation">
            <h1>Reserve a Table</h1>
            <p>Book your table and enjoy an authentic Mediterranean dining experience.</p>

            <form className="reservation-form" onSubmit={handleSubmit}>
                <lable htmlFor="date">Date</lable>
                <input type="date" id="date" value={date} onChange={(e) => {
                    setDate(e.target.value);
                    dispatch(e.target.value);
                }} />

                <lable htmlFor="time">Time</lable>
                <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>

                <label htmlFor="guests">Number of Guests</label>
                <input type="number" id="guests" min="1" max="10" value={guests} onChange={(e) => setGuests(Number(e.target.value))} />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <button type="submit">Reserve Table</button>
            </form>
        </section>
    );
}

export default Reservation;