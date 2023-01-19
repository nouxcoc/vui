import logo from "./logo.svg";
import { HoltelsList } from "./features/hotels/HotelsList";
import "./styles.scss";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import ExlploreNearBy from "./components/explore-nearby/ExploreNearBy";
import FeaturedHotels from "./components/featured/FeaturedHotels";
import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import Home from "./views/home/Home";
import HotelList from "./views/hotel-list/HotelList";
import HotelDetail from "./views/hotel-detail/HotelDetail";
import BookHotel from "./views/book-hotel/BookHotel";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="hotel-list" element={<HotelList />} />
            <Route path="hotel-detail" element={<HotelDetail />} />
            <Route path="book-hotel" element={<BookHotel />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
