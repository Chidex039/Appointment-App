"use client";
import React, { useState } from "react"; // Import useState
// import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSchedule, MdOutlinePayment } from "react-icons/md";
import ProfileDropdown from "../profiledropdown/page";
import Select from "react-dropdown-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RadioButtonGroup from "@/components/RadioButtonGroup";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const Layout: React.FC = ({ children }) => {
//   return (

//   );
// };

const ProfilePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSubmitt = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate) {
      alert(`Selected date: ${selectedDate.toDateString()}`);
    } else {
      alert("Please select a date.");
    }
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Selected option: ${selectedOption}`);
  };

  const day = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
  ];

  const month = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 2 },
    { label: "April", value: 2 },
    { label: "May", value: 2 },
    { label: "June", value: 2 },
    { label: "July", value: 2 },
    { label: "August", value: 2 },
    { label: "September", value: 2 },
    { label: "October", value: 2 },
    { label: "November", value: 2 },
    { label: "December", value: 2 },
  ];

  const year = [
    { label: "2010", value: 1 },
    { label: "2011", value: 2 },
    { label: "2012", value: 2 },
    { label: "2013", value: 2 },
    { label: "2014", value: 2 },
    { label: "2015", value: 2 },
    { label: "2016", value: 2 },
    { label: "2017", value: 2 },
    { label: "2018", value: 2 },
    { label: "2019", value: 2 },
    { label: "2020", value: 2 },
    { label: "2021", value: 2 },
    { label: "2022", value: 2 },
    { label: "2023", value: 2 },
    { label: "2024", value: 2 },
  ];

  const gender = [
    { label: "Male", value: 1 },
    { label: "Female", value: 2 },
  ];

  const procedure = [
    { label: "Medical Examination", value: 1 },
    { label: "Doctor Check", value: 2 },
    { label: "Result Analysis", value: 2 },
    { label: "Checkup", value: 2 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="container w-full bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="p-2 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="w-[15rem]">
              <img src="/images/logo.png" alt="DMC Logo" />
            </div>
            <div className="flex gap-6 text-[1.5rem]">
              <ProfileDropdown />
            </div>
          </div>
        </div>

        {/* Profile Section */}
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

        {/* Form Section */}
        <div className="bg-white h-[8rem]"></div>
        <div className="relative -mt-16 text-center">
          <h1 className="text-3xl font-semibold mt-2">
            Doctor Appointment Request Form
          </h1>
          <p className="text-gray-600">
            Fill the form below and we will get back soon to you for more
          </p>
          <p className="text-gray-600 pb-5">
            updates and plan for your appointment.
          </p>
          <hr />
          <div className="flex justify-center">
            <div className="flex flex-col justify-start items-start p-5 gap-3">
              <form onSubmit={handleSubmit}>
                <div className="flex pb-3">
                  <p>Name</p>
                </div>
                <div className="flex gap-8">
                  <input
                    className="border shadow-sm w-[15rem] h-[2.2rem] rounded-lg"
                    type="text"
                  />
                  <input
                    className="border shadow-sm w-[15rem] h-[2.2rem] rounded-lg"
                    type="text"
                  />
                </div>
                <div className="flex text-sm text-gray-500 gap-[12.6rem] pt-2">
                  <p>First Name</p>
                  <p>Last Name</p>
                </div>

                <div className="flex pt-8 pb-3">
                  <p>Date of birth</p>
                </div>
                <div className="flex gap-4">
                  <div className="h-[2.2rem] w-[10rem]">
                    {/* Use Select Component */}
                    <Select
                      values={day}
                      options={day}
                      onChange={(selectedValues) => console.log(selectedValues)}
                      className="  border shadow-sm rounded-lg"
                    />
                  </div>
                  <div className="h-[2.2rem] w-[10rem]">
                    {/* Use Select Component */}
                    <Select
                      options={month}
                      values={month}
                      onChange={(selectedValues) => console.log(selectedValues)}
                      className="  border shadow-sm rounded-lg"
                    />
                  </div>
                  <div className="h-[2.2rem] w-[10rem]">
                    {/* Use Select Component */}
                    <Select
                      options={year}
                      values={year}
                      onChange={(selectedValues) => console.log(selectedValues)}
                      className="  border shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex text-sm text-gray-500 gap-[9.5rem] pt-2">
                  <p>Day</p>
                  <p>Month</p>
                  <p>Year</p>
                </div>
                <div className="flex gap-[13.5rem] mt-10 pb-2">
                  <p>Gender</p>
                  <p>Phone Number</p>
                </div>
                <div className="flex gap-8">
                  <div className="h-[2.2rem] w-[15rem]">
                    {/* Use Select Component */}
                    <Select
                      values={gender}
                      options={gender}
                      onChange={(selectedValues) => console.log(selectedValues)}
                      className="border-2 shadow-sm rounded-xl"
                    />
                  </div>
                  <div>
                    <input
                      className="border-2 shadow-sm w-[15rem] h-[2.2rem] "
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex pt-8 pb-3">
                  <p>Address</p>
                </div>
                <div className="flex max-w-[35rem]">
                  <input
                    className="border-2 shadow-sm h-[2.2rem] w-full rounded-lg"
                    type="text"
                  ></input>
                </div>
                <h1 className="flex mb-4 mt-10">
                  Have you ever applied to our facility before?
                </h1>

                <div className="flex gap-60">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Yes"
                      checked={selectedOption === "Yes"}
                      onChange={handleOptionChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="No"
                      checked={selectedOption === "No"}
                      onChange={handleOptionChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
                <div className="flex pt-8 pb-3">
                  <p>Which procedure do you want to make appointment for?</p>
                </div>
                <div className="h-[2.2rem] w-[15rem]">
                  {/* Use Select Component */}

                  <Select
                    values={procedure}
                    options={procedure}
                    onChange={(selectedValues) => console.log(selectedValues)}
                    className="  border w-full shadow-sm "
                  />
                </div>

                <div className="flex pt-8 pb-3">
                  <p>Date of Appointment</p>
                </div>

                <div className=" flex">
                  <DatePicker
                    selected={selectedDate}
                    // @ts-ignore
                    onChange={(date: Date) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy"
                    className="border p-2 rounded"
                    placeholderText="Select a date"
                  />
                </div>

                <div className="flex justify-center pt-20 ">
                  <button className="p-2 flex bg-blue-700 w-40 justify-center rounded-3xl text-white font-semibold hover:text-blue-300 hover:bg-blue-800">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
