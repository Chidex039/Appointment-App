"use client";

import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSchedule, MdOutlinePayment } from "react-icons/md";
import ProfileDropdown from "../profiledropdown/page";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ImageUpload from "../ImageUpload/page";

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="container w-full bg-white shadow-md rounded-lg overflow-hidden">
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
              <ProfileDropdown />
            </div>
          </div>
        </div>
        <div className="h-full w-full bg-gray-800 text-white flex-shrink-0 p-4">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-semibold mb-8">My Profile</h2>
          </div>
          <div className="flex justify-around">
            <div className="flex gap-3 items-center transition duration-500 ease-in-out transform hover:scale-105 text-2xl">
              <CgProfile />
              <a href="/Dashboard">Profile</a>
            </div>
            <div className="flex gap-3 items-center transition duration-500 ease-in-out transform hover:scale-105 text-2xl">
              <MdOutlineSchedule />
              <a href="/Appointment">Appointments</a>
            </div>

            <div className="flex gap-3 items-center transition duration-500 ease-in-out transform hover:scale-105 text-2xl">
              <MdOutlinePayment />
              <a href="/payment">Payments</a>
            </div>
          </div>
        </div>
        <div className="bg-white h-[8rem]"></div>
        <div className="relative -mt-16 text-center">
          <div>
            <ImageUpload />
          </div>
          <br />
          <br />

          <h1 className="text-3xl font-semibold mt-2">Mhizta Dera</h1>
          <p className="text-gray-600">Fullstack Developer</p>
          <p className="mt-2 text-sm text-gray-500">mhiztadera@gmail.com</p>
          <p className="mt-2 text-sm text-gray-500">FCT Abuja, Nigeria</p>
        </div>
        <div className="p-10 flex items-center flex-col">
          <h2 className="font-semibold text-[8rem]">Profile Page</h2>
          <p className="mt-2 text-gray-700">COMING SOON</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
