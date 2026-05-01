import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LoadingAnimation from "../components/loadingAnimation";
import { FaStar, FaRegStar, FaTrash } from "react-icons/fa";

// ── Decode JWT to get user info (no library needed) ───────────────
function getCurrentUser() {
	try {
		const token = localStorage.getItem("token");
		if (!token) return null;
		const payload = JSON.parse(atob(token.split(".")[1]));
		// JWT contains: email, firstName, lastName, role, image, isEmailVerified
		return {
			email: payload.email,
			name: `${payload.firstName || ""} ${payload.lastName || ""}`.trim() || payload.email,
			role: payload.role,
		};
	} catch {
		return null;
	}
}

// ── Star display ──────────────────────────────────────────────────
function StarDisplay({ rating, size = "text-base" }) {
	return (
		<div className={`flex gap-0.5 ${size}`}>
			{[1, 2, 3, 4, 5].map((s) => (
				<span key={s} className={s <= rating ? "text-yellow-400" : "text-gray-300"}>
					{s <= rating ? <FaStar /> : <FaRegStar />}
				</span>
			))}
		</div>
	);
}

// ── Interactive star picker ────────────────────────────────────────
function StarPicker({ value, onChange }) {
	const [hovered, setHovered] = useState(0);
	return (
		<div className="flex gap-1 text-2xl cursor-pointer">
			{[1, 2, 3, 4, 5].map((s) => (
				<span
					key={s}
					className={(hovered || value) >= s ? "text-yellow-400" : "text-gray-300"}
					onMouseEnter={() => setHovered(s)}
					onMouseLeave={() => setHovered(0)}
					onClick={() => onChange(s)}
				>
					<FaStar />
				</span>
			))}
		</div>
	);
}

// ── Review card ───────────────────────────────────────────────────
function ReviewCard({ review, currentUserEmail, isAdmin, onDelete }) {
	const date = new Date(review.createdAt).toLocaleDateString("en-LK", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	const canDelete = isAdmin || currentUserEmail === review.userEmail;

	return (
		<div className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-2 border border-secondary/10">
			<div className="flex items-center justify-between flex-wrap gap-2">
				<div className="flex items-center gap-3">
					<div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-white font-semibold text-sm uppercase shrink-0">
						{review.userName?.charAt(0)}
					</div>
					<div>
						<p className="font-semibold text-sm text-secondary">{review.userName}</p>
						<p className="text-xs text-gray-400">{date}</p>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<StarDisplay rating={review.rating} size="text-sm" />
					{canDelete && (
						<button
							onClick={() => onDelete(review.reviewId)}
							className="text-red-400 hover:text-red-600 transition text-sm"
						>
							<FaTrash />
						</button>
					)}
				</div>
			</div>
			{review.title && (
				<p className="font-semibold text-sm text-secondary">{review.title}</p>
			)}
			<p className="text-sm text-gray-500 leading-relaxed">{review.comment}</p>
		</div>
	);
}

// ── Main page ─────────────────────────────────────────────────────
export default function ProductReviewsPage() {
	const { productId } = useParams();
	const navigate = useNavigate();

	const [reviews, setReviews] = useState([]);
	const [avgRating, setAvgRating] = useState(0);
	const [total, setTotal] = useState(0);
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [submitting, setSubmitting] = useState(false);

	const [rating, setRating] = useState(0);
	const [title, setTitle] = useState("");
	const [comment, setComment] = useState("");

	// Read user directly from the JWT token in localStorage
	const currentUser = getCurrentUser();
	const isAdmin = currentUser?.role === "admin";

	useEffect(() => {
		if (loading) {
			Promise.all([
				axios.get(`${import.meta.env.VITE_API_URL}/reviews/${productId}`),
				axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`),
			])
				.then(([reviewsRes, productRes]) => {
					setReviews(reviewsRes.data.reviews);
					setAvgRating(reviewsRes.data.avgRating);
					setTotal(reviewsRes.data.total);
					setProduct(productRes.data);
					setLoading(false);
				})
				.catch(() => {
					toast.error("Failed to load reviews.");
					setLoading(false);
				});
		}
	}, [loading, productId]);

	function handleSubmit() {
		if (!currentUser) {
			toast.error("Please log in to leave a review.");
			navigate("/login");
			return;
		}
		if (rating === 0) {
			toast.error("Please select a star rating.");
			return;
		}
		if (!comment.trim()) {
			toast.error("Please write a comment.");
			return;
		}

		setSubmitting(true);
		axios
			.post(
				`${import.meta.env.VITE_API_URL}/reviews/${productId}`,
				{ rating, title, comment },
				{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
			)
			.then(() => {
				toast.success("Review submitted!");
				setRating(0);
				setTitle("");
				setComment("");
				setLoading(true);
			})
			.catch((err) => {
				toast.error(err.response?.data?.message || "Failed to submit review.");
			})
			.finally(() => setSubmitting(false));
	}

	function handleDelete(reviewId) {
		if (!confirm("Delete this review?")) return;
		axios
			.delete(`${import.meta.env.VITE_API_URL}/reviews/${reviewId}`, {
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
			})
			.then(() => {
				toast.success("Review deleted.");
				setLoading(true);
			})
			.catch(() => toast.error("Failed to delete review."));
	}

	const distribution = [5, 4, 3, 2, 1].map((star) => ({
		star,
		count: reviews.filter((r) => r.rating === star).length,
	}));

	return (
		<div className="min-h-screen bg-primary pt-[80px] pb-16 px-4">
			{loading && <LoadingAnimation />}

			<div className="max-w-3xl mx-auto flex flex-col gap-8">

				{/* Header */}
				<div className="flex items-center gap-4">
					<button
						onClick={() => navigate(-1)}
						className="text-sm text-secondary/60 hover:text-secondary transition"
					>
						← Back
					</button>
					<h1 className="text-2xl font-bold text-secondary">
						Reviews
						{product && (
							<span className="text-gray-400 font-normal"> — {product.name}</span>
						)}
					</h1>
				</div>

				{/* Rating summary */}
				<div className="bg-white rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center border border-secondary/10 shadow-sm">
					<div className="flex flex-col items-center gap-1 min-w-[110px]">
						<span className="text-5xl font-bold text-secondary">
							{avgRating.toFixed(1)}
						</span>
						<StarDisplay rating={Math.round(avgRating)} size="text-lg" />
						<span className="text-xs text-gray-400">
							{total} review{total !== 1 ? "s" : ""}
						</span>
					</div>
					<div className="flex-1 flex flex-col gap-2 w-full">
						{distribution.map(({ star, count }) => (
							<div key={star} className="flex items-center gap-2 text-xs text-gray-400">
								<span className="w-3 text-right">{star}</span>
								<FaStar className="text-yellow-400 shrink-0" />
								<div className="flex-1 bg-gray-100 rounded-full h-2">
									<div
										className="bg-yellow-400 h-2 rounded-full transition-all"
										style={{
											width: total > 0 ? `${(count / total) * 100}%` : "0%",
										}}
									/>
								</div>
								<span className="w-4">{count}</span>
							</div>
						))}
					</div>
				</div>

				{/* Write a review form */}
				<div className="bg-white rounded-xl p-6 flex flex-col gap-4 border border-secondary/10 shadow-sm">
					<h2 className="text-lg font-semibold text-secondary">Write a Review</h2>

					{!currentUser ? (
						<p className="text-sm text-gray-500">
							<button
								onClick={() => navigate("/login")}
								className="text-accent underline"
							>
								Log in
							</button>{" "}
							to leave a review.
						</p>
					) : (
						<>
							<div className="flex flex-col gap-1">
								<label className="text-xs text-gray-400 uppercase tracking-wide">
									Your Rating *
								</label>
								<StarPicker value={rating} onChange={setRating} />
							</div>

							<div className="flex flex-col gap-1">
								<label className="text-xs text-gray-400 uppercase tracking-wide">
									Title (optional)
								</label>
								<input
									type="text"
									placeholder="Summarise your experience"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									className="w-full rounded-lg px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:border-accent text-secondary"
								/>
							</div>

							<div className="flex flex-col gap-1">
								<label className="text-xs text-gray-400 uppercase tracking-wide">
									Comment *
								</label>
								<textarea
									placeholder="Tell us about your experience with this product..."
									value={comment}
									onChange={(e) => setComment(e.target.value)}
									rows={4}
									className="w-full rounded-lg px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:border-accent resize-none text-secondary"
								/>
							</div>

							<button
								onClick={handleSubmit}
								disabled={submitting}
								className="self-start px-6 py-2 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-accent transition disabled:opacity-50"
							>
								{submitting ? "Submitting..." : "Submit Review"}
							</button>
						</>
					)}
				</div>

				{/* Reviews list */}
				<div className="flex flex-col gap-4">
					<h2 className="text-lg font-semibold text-secondary">
						Customer Reviews
					</h2>
					{!loading && reviews.length === 0 && (
						<p className="text-gray-400 text-sm">
							No reviews yet. Be the first to review this product!
						</p>
					)}
					{reviews.map((review) => (
						<ReviewCard
							key={review.reviewId}
							review={review}
							currentUserEmail={currentUser?.email}
							isAdmin={isAdmin}
							onDelete={handleDelete}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
