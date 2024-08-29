import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="container">
      <footer className="bg-gray-800 text-white py-6">
        <div className="flex justify-center items-center">
          <Link className="text-2xl font-bold" href="/">
            {" "}
            <img src="/DMC LOGO.jpg" className="w-[8rem]" />
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="flex justify-center gap-10 pt-3">
          <Link href="/#" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/#" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/#" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        <div className="flex flex-col p-4">
          <p>Social Media Links:</p>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Twitter
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Instagram
          </a>
        </div>
        {/* Copyright */}
        <div className="mt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
