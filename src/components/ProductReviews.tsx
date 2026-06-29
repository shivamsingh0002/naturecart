"use client";

import { useEffect, useState } from "react";


export default function ProductReviews({
  productId,
}: {
  productId: string;
}) {
  const [reviews, setReviews] = useState<any[]>([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  async function loadReviews() {
    const res = await fetch(
      `/api/reviews?productId=${productId}`
    );

    const data = await res.json();

    setReviews(data);
  }

  useEffect(() => {
    loadReviews();
  }, [productId]);

  async function submitReview() {
    if (!comment) return;

    await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        userId: "demo-user",
        rating,
        comment,
      }),
    });

    setComment("");

    loadReviews();
  }

  return (
    <div className="mt-16">

      <h2 className="mb-6 text-3xl font-bold">
        Customer Reviews
      </h2>

      <div className="mb-8 rounded-2xl bg-white p-6 shadow">

        <select
          value={rating}
          onChange={(e) =>
            setRating(Number(e.target.value))
          }
          className="mb-4 border p-3 rounded-lg"
        >
          <option value={5}>⭐⭐⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={1}>⭐</option>
        </select>

        <textarea
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
          placeholder="Write your review..."
          className="mb-4 w-full rounded-xl border p-4"
        />

        <button
          onClick={submitReview}
          className="rounded-xl bg-green-600 px-6 py-3 text-white"
        >
          Submit Review
        </button>

      </div>

      {reviews.length === 0 ? (
        <div className="rounded-xl bg-gray-100 p-5">
          No reviews yet.
        </div>
      ) : (
        reviews.map((review) => (
          <div
            key={review.id}
            className="mb-4 rounded-2xl bg-white p-5 shadow"
          >
            <div className="mb-2 text-yellow-500">
              {"⭐".repeat(review.rating)}
            </div>

            <p>{review.comment}</p>
          </div>
        ))
      )}

    </div>
  );
}