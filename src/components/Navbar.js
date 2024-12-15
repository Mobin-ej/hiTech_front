import React from 'react';
import { Disclosure } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/form2');
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-[90%] left-0 right-0 bg-[#7AB2D3] mt-5 bg-opacity-50 rounded-full shadow-lg shadow-black/10 backdrop-blur-md border z-50 max-w-[1320px] mx-auto"
    >
      <div className="relative flex h-16 items-center justify-between px-4">
        <button
          onClick={handleSignupClick}
          className="relative inline-block px-3 font-BNazanin ml-4 py-1 text-[#4A628A] transition-all duration-300 border-2 bg-[#B9E5E8] rounded-lg overflow-hidden group hover:bg-sky-400 hover:text-white hover:shadow-[0px_2px_0px_2px_rgba(13,59,102,1)] active:scale-90"
        >
          {/* <input
          type="text"
          name="text"
          placeholder="Search"
          class="block text-gray-800 bg-gradient-to-r from-[#DFF2EB] to-gray-100/60 shadow-md shadow-black/20 border-transparent rounded-full h-5 mx-auto px-4 py-3 text-center w-50 outline-none transition-all duration-500 hover:w-60 focus:w-72"
        /> */}
          <p className="text-xl">عضویت</p>
          <span className="absolute top-1/2 left-0 w-[100px] h-[120%] bg-[#DFF2EB] transform -translate-y-1/2 skew-x-[30deg] -translate-x-[150%] transition-all duration-500 group-hover:translate-x-[150%] group-hover:delay-100"></span>
        </button>
        <p className="font-BNazanin text-xl text-[#4A628A]">دورهمی هایتک</p>
        <div className="flex mr-4 items-center justify-end sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0">
            <img src="./hitech1.jpg" className="h-14 rounded-full w-auto" />
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
