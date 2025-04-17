import React, { useState } from "react";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="hidden md:flex justify-between items-center p-4 [li]:list-none border-b-[1px] border-[#bac1c9]">
        <ul className="flex flex-wrap items-center gap-6">
          <li>
            <img
              src="https://images.www.talentlms.com/wp-content/themes/talentlms2021/front-end/src/assets/img/logo.svg"
              alt="logo"
              className="w-[180px]"
            />
          </li>
          <li className="hover:text-green-500 cursor-pointer">Platform</li>
          <li className="hover:text-green-500 cursor-pointer">Pricing</li>
          <li className="hover:text-green-500 cursor-pointer">Solutions</li>
          <li className="hover:text-green-500 cursor-pointer">Customers</li>
          <li className="hover:text-green-500 cursor-pointer">Resources</li>
          <li className="hover:text-green-500 cursor-pointer">About us</li>
        </ul>
        <ul className="flex items-center gap-4">
          <li className="hover:text-blue-600 cursor-pointer">Login</li>
          <li>
            <div className="w-[1.5px] h-[35px] bg-[#bac1c9]"></div>
          </li>
          <li>
            <button className="border border-black hover:border-transparent hover:bg-orange-400 transition-all duration-200 cursor-pointer rounded-md py-2 px-3">
              Request a demo
            </button>
          </li>
          <li>
            <button className="bg-blue-400 hover:bg-blue-300 text-white border-none cursor-pointer rounded-md py-2 px-3">
              Sign up
            </button>
          </li>
        </ul>
      </div>
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
          <span className="text-3xl">&#9776;</span>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-[260px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <img
            src="https://images.www.talentlms.com/wp-content/themes/talentlms2021/front-end/src/assets/img/logo.svg"
            alt="logo"
            className="w-[160px]"
          />
          <button onClick={toggleSidebar} className="text-3xl">
            &times;
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-lg">
          <li className="hover:text-green-500 cursor-pointer">Platform</li>
          <li className="hover:text-green-500 cursor-pointer">Pricing</li>
          <li className="hover:text-green-500 cursor-pointer">Solutions</li>
          <li className="hover:text-green-500 cursor-pointer">Customers</li>
          <li className="hover:text-green-500 cursor-pointer">Resources</li>
          <li className="hover:text-green-500 cursor-pointer">About us</li>
          <li className="hover:text-blue-600 cursor-pointer">Login</li>
          <li>
            <button className="border border-black hover:border-transparent hover:bg-orange-400 transition-all duration-200 cursor-pointer rounded-md py-2 px-3 w-full text-left">
              Request a demo
            </button>
          </li>
          <li>
            <button className="bg-blue-400 hover:bg-blue-300 text-white border-none cursor-pointer rounded-md py-2 px-3 w-full text-left">
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
