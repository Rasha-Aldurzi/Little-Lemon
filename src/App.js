import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import BookingPage from "./pages/BookingPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" end element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<BookingPage />} />
            <Route path="/order-online" element={<OrderOnlinePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;