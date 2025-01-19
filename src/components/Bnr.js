// import React from 'react';

// const Bnr = () => {
//   localStorage.getItem("image_path")
//   return (
//     <div
//       className="border  mx-7 md:mx-8 lg:mx-24 rounded-md h-60 md:h-72 lg:h-80 w-full flex items-center justify-center overflow-hidden"
//     >
//       <img
//         src={`http://185.208.175.233:5001/${localStorage.getItem("image_path")}`}
//         alt="Bnr"
//         className="h-full w-full object-cover"
//       />
//     </div>
//   );
// };

// export default Bnr;



import React from 'react';

const Bnr = () => {
  const imagePath = localStorage.getItem("image_path");
  return (
    <div
      className=" mx-7 md:mx-8 lg:mx-24 rounded-md h-60 md:h-72 lg:h-80 w-full flex items-center justify-center overflow-hidden"
    >
      <img
        src={`http://185.208.175.233:5001/${imagePath}`}
        alt="Bnr"
        className="h-full w-full object-contain" // تغییر به object-contain برای حفظ نسبت ابعاد
      />
    </div>
  );
};

export default Bnr;
