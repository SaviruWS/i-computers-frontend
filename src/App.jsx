import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import Test from "./components/test";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/register";
import ForgetPassword from "./pages/forgetPassword";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProductReviewsPage from "./pages/ProductReviews";


export default function App() {
	return (
		<GoogleOAuthProvider clientId="927477435938-rnns36a680plc8leeh1dvaqr2h1dt71q.apps.googleusercontent.com">
			<div className="w-full h-screen bg-primary text-secondary">
				<Toaster position="top-right"/>
				<Routes>
					<Route path="/*" element={<HomePage />} />
					<Route path="/admin/*" element={<AdminPage/>}/>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/forgot-password" element={<ForgetPassword />} />
					<Route path="/test" element={<Test/>} />
					<Route path="/reviews/:productId" element={<ProductReviewsPage />} />
				</Routes>
			</div>
		</GoogleOAuthProvider>
	);
}