"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

function Signup() {

  const router = useRouter();

   
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Ensure this code runs only on the client side
  }, []);

  const submitData = async () => {
    console.log("current user: ", user);
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Welcome to signup page</h1>
      <label>User Name</label>
      <input
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
        placeholder="username"
        className="px-2 py-1 text-black text-lg rounded-2xl"
      />
      <label>Email</label>
      <input
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
        placeholder="email"
        className="px-2 py-1 text-black text-lg rounded-2xl"
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="password"
        className="px-2 py-1 text-black text-lg rounded-2xl"
      />
      <button onClick={submitData} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-2xl">
        Sign Up
      </button>
    </div>
  );
}

export default Signup;