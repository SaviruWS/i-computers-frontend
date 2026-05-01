import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductPage from "./productPage";
import Overview from "./overview";
import Cart from "./cart";
import Checkout from "./checkout";
import MyOrdersPage from "./myOrdersPage";
import SettingsPage from "./settings";
import LandingPage from "./landingPage";
import AboutPage from "./about";
import ContactPage from "./contact";
import ProductReviewsPage from "./ProductReviews";   // 👈 add this

export default function HomePage() {
    return (
        <div className="w-full h-screen overflow-y-scroll">
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* products */}
                <Route path="/products" element={<ProductPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/overview/:productId" element={<Overview />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/my-orders" element={<MyOrdersPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                {/* reviews */}
                <Route path="/reviews/:productId" element={<ProductReviewsPage />} />  {/* 👈 add this */}
                <Route path="/*" element={<div>404 Not Found</div>} />
            </Routes>
        </div>
    );
}
