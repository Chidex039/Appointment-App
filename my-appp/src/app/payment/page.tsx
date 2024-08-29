import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSchedule, MdOutlinePayment } from "react-icons/md";
import ProfileDropdown from "../profiledropdown/page";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";

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
        <div className="bg-white h-[8rem]"></div>{" "}
        <div className="relative -mt-16 text-center">
          <h1 className="text-3xl font-semibold mt-2">Mhizta Dera</h1>
          <p className="text-gray-600">Fullstack Developer</p>
          <p className="mt-2 text-sm text-gray-500">mhiztadera@gmail.com</p>
          <p className="mt-2 text-sm text-gray-500">FCT Abuja, Nigeria</p>
        </div>
        <div className="p-10 flex items-center flex-col">
          <h2 className="text-[8rem] font-semibold">Payment Page</h2>
          <p className="mt-2 text-gray-700">COMING SOON</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;

// const dashboard = () => {
//   return (
//     <div className="bg-slate-100">
//       <div className="container m-auto border">
//         <div className="bg-white p-4 shadow-lg rounded-lg">
//           <div className="flex justify-between items-center">
//             <img className="w-20 h-20" src="/Untitled-2.png" alt=""></img>
//             <div className="flex gap-2 items-center">
//               <ProfileDropdown />
//               {/* <img className="h-10 w-10 rounded-full" src="/pic.jpg" />
//               <div>
//                 <p>Your Name</p>{" "}
//               </div> */}
//             </div>
//           </div>
//         </div>
//         <div className="bg-slate-950 h-[60rem] w-[20rem]  flex justify-center items-center">
//           <div className="flex justify-center text-white flex-col gap-3 text-[1.5rem] pb-[30rem]">
//             <div className="flex gap-3 items-center transition duration-500 ease-in-out transform hover:scale-105">
//               <CgProfile />
//               <a href="#">Profile</a>
//             </div>
//             <div className="flex gap-3 items-center transition duration-500 ease-in-out transform hover:scale-105">
//               <MdOutlineSchedule />
//               <a href="/appointment">Appointments</a>
//             </div>

//             <div className="flex gap-3 items-center transition duration-500 ease-in-out transform hover:scale-105">
//               <MdOutlinePayment />
//               <a href="#">Payments</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default dashboard;
