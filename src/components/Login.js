// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const navigate = useNavigate(); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;

//     try {
//       const response = await fetch('http://185.208.175.233:5001/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();
//       console.log(data);

//       localStorage.setItem('access_token', data.access_token);  // ذخیره توکن پس از ورود موفقیت‌آمیز

//       // هدایت به صفحه اصلی در صورت موفقیت
//       navigate('/');
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="max-w-xs mx-auto bg-gradient-to-b from-white to-gray-100 rounded-3xl p-6 border-4 border-white shadow-lg m-5 mt-40">
//       <div className="text-center font-black text-2xl text-[rgb(158,183,214)]">Login</div>
//       <form className="mt-5" onSubmit={handleSubmit}>
//         <input
//           placeholder="E-mail"
//           ref={emailRef} 
//           id="email"
//           name="email"
//           type="email"
//           className="w-full bg-white border-none p-4 rounded-2xl mt-4 shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(157,143,128)]"
//         />
//         <input
//           placeholder="Password"
//           ref={passwordRef}
//           id="password"
//           name="password"
//           type="password"
//           className="w-full bg-white border-none p-4 rounded-2xl mt-4 shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(157,143,128)]"
//         />
//         <span className="block mt-3 ml-3 text-xs text-blue-500">
//           <a href="#">Forgot Password?</a>
//         </span>
//         <input
//           value="Login"
//           type="submit"
//           className="w-full font-bold bg-gradient-to-r from-[rgb(158,183,214)] to-cyan-500 text-white py-3 mt-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
//         />
//       </form>

//       <div className="flex justify-center mt-4">
//         <button 
//           className="text-[rgb(158,183,214)] font-extrabold uppercase text-lg relative focus:outline-none transition-colors duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:text-[rgb(157,143,128)]"
//         >
//           Register
//           <span className="absolute bottom-[-2px] left-1 w-0 h-[2px] bg-[rgb(129,115,98)] transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] transform origin-left hover:w-full hover:left-0"></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await fetch('http://185.208.175.233:5001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log(data);

      localStorage.setItem('access_token', data.access_token);

      // هدایت به صفحه Information پس از لاگین موفق
      navigate('/information');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="max-w-xs mx-auto bg-gradient-to-b from-white to-gray-100 rounded-3xl p-6 border-4 border-white shadow-lg m-5 mt-40">
      <Navbar />
      <div className="text-center font-black text-2xl text-[rgb(158,183,214)]">Login</div>
      <form className="mt-5" onSubmit={handleSubmit}>
        <input
          placeholder="E-mail"
          ref={emailRef}
          id="email"
          name="email"
          type="email"
          className="w-full bg-white border-none p-4 rounded-2xl mt-4 shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(157,143,128)]"
        />
        <input
          placeholder="Password"
          ref={passwordRef}
          id="password"
          name="password"
          type="password"
          className="w-full bg-white border-none p-4 rounded-2xl mt-4 shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(157,143,128)]"
        />
        {/* <span className="block mt-3 ml-3 text-xs text-blue-500">
          <a href="#">Forgot Password?</a>
        </span> */}
        <input
          value="Login"
          type="submit"
          className="w-full font-bold bg-gradient-to-r from-[rgb(158,183,214)] to-cyan-500 text-white py-3 mt-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
        />
      </form>
    </div>
  );
};

export default Login;
