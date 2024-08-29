"use client"; // Ensure this is at the top for client-side rendering

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "@/helpers";
import Navbar from "@/components/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRouter } from "next/navigation"; // Use `next/navigation` for Next.js 13+
import { useDispatch } from "react-redux";
import { updateUser } from "@/features/user/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${baseUrl}/auth/sign-in`, {
        username: username.trim(),
        password: password.trim(),
      });

      if (response.status === 200) {
        dispatch(updateUser(response.data));
        router.push("/Dashboard"); // Use router.push for redirection
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError("An error occurred while logging in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="background grid h-screen place-items-center gap-10">
        <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative flex justify-center flex-col items-center h-screen text-white w-full max-w-[30rem] max-h-[25rem]">
          <img src="/login.gif" height={70} width={70} alt="Login" />

          <form className="relative my-4 w-full" onSubmit={handleSubmit}>
            <div className="relative my-4 w-full">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="block max-w-[35rem] w-full py-2.5 px-0
                text-[1rem] text-white bg-transparent border-0
                border-b-2 border-gray-300 appearance-none focus:outline-none
                focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor="username"
                className="absolute text-[1rem] duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:translate:-y-6 flex gap-3"
              >
                <FaRegUserCircle size={"20px"} /> Username
              </label>
            </div>
            <div className="relative my-4 w-full">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block max-w-[35rem] w-full py-2.5 px-0
                text-[1rem] text-white bg-transparent border-0
                border-b-2 border-gray-300 appearance-none focus:outline-none
                focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor="password"
                className="absolute text-[1rem] duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:translate:-y-6 flex gap-3"
              >
                <RiLockPasswordLine size={"20px"} />
                Your Password
              </label>
            </div>
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error message */}
            <button
              type="submit"
              className="max-w-[15rem] w-full mb-4 text-[18px] mt-6 rounded-full bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="flex gap-3">
            <p>Don't have an account?</p>
            <Link href="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
