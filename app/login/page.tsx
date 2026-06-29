"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  async function submit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirect: true,
      callbackUrl: "/",
    });

    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7faf5]">
      <form
        onSubmit={submit}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
      >
        <h1 className="mb-6 text-center text-4xl font-bold">
          Login
        </h1>

        <input
          name="email"
          placeholder="Email"
          className="mb-4 w-full rounded-xl border p-4"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded-xl border p-4"
        />

        <button
          className="w-full rounded-xl bg-green-600 py-4 text-white"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}