"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "@/helpers";
import Navbar from "@/components/Navbar";

const Signup = () => {
  const [fullName, setfullName] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!fullName || !username || !password) {
      alert("Please provide the required values");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${baseUrl}/auth/sign-up`, {
        fullName: fullName.trim(),
        username: username.trim(),
        password: password.trim(),
      });

      alert("Registered Successfully");

      // Use window.location.href to navigate
      window.location.href = "/login"; // Redirect to the dashboard upon successful registration
    } catch (error: any) {
      alert(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="background grid h-screen place-items-center gap-10">
        <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative flex justify-center flex-col items-center h-screen text-white w-full max-w-[30rem] max-h-[32rem]">
          <div>
            <img src="/register.gif" height={130} width={130} alt="Register" />
          </div>
          <form className="relative my-4 w-full" onSubmit={handleSubmit}>
            <div className="relative my-4 w-full">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
                required
                className="block max-w-[35rem] w-full py-2.5 px-0 text-[1rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder="Full Name"
              />
            </div>

            <div className="relative my-4 w-full">
              <input
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
                className="block max-w-[35rem] w-full py-2.5 px-0 text-[1rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder="Username"
              />
            </div>

            <div className="relative my-4 w-full">
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
                className="block max-w-[35rem] w-full py-2.5 px-0 text-[1rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="max-w-[15rem] w-full mb-4 text-[18px] mt-6 rounded-full bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300 "
              >
                {loading ? "Loading..." : "Register"}
              </button>
            </div>
          </form>

          <div className="flex gap-3">
            <p>Already have an account? </p>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
