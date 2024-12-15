import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Sbt = () => {
  const navigate = useNavigate(); // تابع هدایت
  const [isLoading, setIsLoading] = useState(false); // وضعیت لودینگ

  const handleClick = () => {
    setIsLoading(true); // فعال کردن لودینگ
    setTimeout(() => {
      navigate('/form1'); // هدایت به مسیر /form1 بعد از 3 ثانیه
    }, 3000);
  };

  return (
    <div className="relative">
      {isLoading ? (
        <div className="flex items-center justify-center h-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      ) : (
     
        <button
          onClick={handleClick}
          className="relative inline-block px-10 font-BNazanin ml-4 py-2 text-[#4A628A] transition-all duration-300 border-2 bg-[#B9E5E8] rounded-lg overflow-hidden group hover:bg-sky-400 hover:text-white hover:shadow-[0px_2px_0px_2px_rgba(13,59,102,1)] active:scale-90"
        >
          <p className="text-xl">ثبت نام</p>
          <span className="absolute top-1/2 left-0 w-[100px] h-[120%] bg-[#DFF2EB] transform -translate-y-1/2 skew-x-[30deg] -translate-x-[150%] transition-all duration-500 group-hover:translate-x-[150%] group-hover:delay-100"></span>
        </button>
      )}
    </div>
  );
};

export default Sbt;
