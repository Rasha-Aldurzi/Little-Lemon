import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import ReservationPage from "./pages/ReservationPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" end element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
            <Route path="/order-online" element={<OrderOnlinePage />} />
            <Route path="/confirmed" element={<ConfirmedBookingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;