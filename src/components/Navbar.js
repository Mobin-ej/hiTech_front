import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSignupClick = () => {
    navigate('/form2');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token'); 
    setIsLoggedIn(false); 
    navigate('/'); 
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-[90%] left-0 right-0 bg-[#7AB2D3] mt-5 bg-opacity-50 rounded-full shadow-lg shadow-black/10 backdrop-blur-md border z-50 max-w-[1320px] mx-auto"
    >
      <div className="relative flex h-16 items-center justify-between px-4">
        {/* نمایش باتن عضویت یا کامپوننت پروفایل بر اساس وضعیت لاگین */}
        {!isLoggedIn ? (
          <button
            onClick={handleSignupClick}
            className="relative inline-block px-3 font-BNazanin ml-4 py-1 text-[#4A628A] transition-all duration-300 border-2 bg-[#B9E5E8] rounded-lg overflow-hidden group hover:bg-sky-400 hover:text-white hover:shadow-[0px_2px_0px_2px_rgba(13,59,102,1)] active:scale-90"
          >
            <p className="text-xl">عضویت</p>
            <span className="absolute top-1/2 left-0 w-[100px] h-[120%] bg-[#DFF2EB] transform -translate-y-1/2 skew-x-[30deg] -translate-x-[150%] transition-all duration-500 group-hover:translate-x-[150%] group-hover:delay-100"></span>
          </button>
        ) : (
          <div className="flex items-center">
            <Profile />
            
            <button
              onClick={handleLogout}
              className="ml-4 px-3 py-1 font-BNazanin text-[#4A628A] text-xl border-2 bg-[#B9E5E8] rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 active:scale-90 hidden sm:block"
            >
              خروج
            </button>
           
          </div>
        )}

        <p className="font-BNazanin text-xl text-[#4A628A]">دورهمی هایتک</p>
        <div className="flex mr-4 items-center justify-end sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0">
            <img 
              src="./hitech1.jpg" 
              className="h-14 rounded-full w-auto cursor-pointer" 
              onClick={handleLogoClick} 
            />
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
