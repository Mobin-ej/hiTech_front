import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/information");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src="/logo1.jpg"
        alt="Profile"
        className="w-14 h-14 ml-4 rounded-full border-2 border-gray-300 shadow-lg cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default Profile;
