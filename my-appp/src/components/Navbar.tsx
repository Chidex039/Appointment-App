import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" p-2 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        {" "}
        {/* nav logo */}
        <div className="w-[15rem]">
          {" "}
          <img src="/images/logo.png" alt="DMC Logo" />{" "}
        </div>
        {/* navigation links */}
        <div className="flex gap-6 text-[1.5rem] ">
          <Link
            className="hover:text-white hover:bg-blue-950 p-2 rounded-lg"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-white hover:bg-blue-950 p-2 rounded-lg"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="hover:text-white hover:bg-blue-950 p-2 rounded-lg"
            href="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
