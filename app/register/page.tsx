"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function register() {
    const res = await fetch(
      "/api/auth/register",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          email,
          password
        })
      }
    );

    const data = await res.json();

    if(data.success){
      alert("Account Created");
      window.location.href="/login";
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7faf5]">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <h1 className="mb-6 text-center text-4xl font-bold text-green-700">
          Sign Up
        </h1>

        <input
          placeholder="Name"
          className="mb-4 w-full rounded-xl border p-4"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="mb-4 w-full rounded-xl border p-4"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded-xl border p-4"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="w-full rounded-xl bg-green-600 py-4 text-white"
        >
          Create Account
        </button>

      </div>
    </div>
  );
}