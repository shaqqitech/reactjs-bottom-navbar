import React, { useState } from "react";
import { FaHome, FaSearch, FaUser, FaHeart } from "react-icons/fa";

const BottomNavbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-60 h-16 py-1 flex justify-around items-center bg-gray-800 rounded-b-3xl">
      <div
        onClick={() => handleTabClick("home")}
        className={`flex-shrink-0 p-3 ${
          activeTab === "home" ? "bg-gray-600" : "hover:bg-gray-700"
        } cursor-pointer text-white rounded-lg overflow-hidden rounded-bl-3xl`}
      >
        <FaHome size={25} />
      </div>
      <div
        onClick={() => handleTabClick("search")}
        className={`flex-shrink-0 p-3 ${
          activeTab === "search" ? "bg-gray-600" : "hover:bg-gray-700"
        } cursor-pointer text-white rounded-lg`}
      >
        <FaSearch size={25} />
      </div>
      <div
        onClick={() => handleTabClick("profile")}
        className={`flex-shrink-0 p-3 ${
          activeTab === "profile" ? "bg-gray-600" : "hover:bg-gray-700"
        } cursor-pointer text-white rounded-lg`}
      >
        <FaUser size={25} />
      </div>
      <div
        onClick={() => handleTabClick("favorites")}
        className={`flex-shrink-0 p-3 ${
          activeTab === "favorites" ? "bg-gray-600" : "hover:bg-gray-700"
        } cursor-pointer text-white rounded-lg overflow-hidden rounded-br-3xl`}
      >
        <FaHeart size={25} />
      </div>
    </div>
  );
};

export default BottomNavbar;
