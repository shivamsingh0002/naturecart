"use client";

import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signup() {
    alert("Button clicked");
    console.log("Button clicked");
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("🎉 Account Created Successfully");
        window.location.href = "/login";
      } else {
        alert(data.message || "Signup Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold text-green-700">
            NatureCart 🌿
          </h1>

          <p className="mt-3 text-gray-600">
            Create your account and start shopping organic products
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-2xl border border-green-100">

          <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
            Create Account
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 w-full rounded-2xl border p-4 outline-none focus:border-green-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded-2xl border p-4 outline-none focus:border-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 w-full rounded-2xl border p-4 outline-none focus:border-green-500"
          />

          <button
            onClick={signup}
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 py-4 font-bold text-white transition hover:scale-105"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="mt-6 text-center">
            <p className="text-gray-500">
              Already have an account?
            </p>

            <a
              href="/login"
              className="font-semibold text-green-600 hover:text-green-700"
            >
              Login Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}