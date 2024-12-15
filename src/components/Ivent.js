import React from 'react';
import './Ivent.css'; // ایمپورت فایل CSS

const Ivent = () => {
    return (
        <div className="card relative flex items-center justify-center w-[90%] md:w-[80%]  h-[200px] md:h-[254px] overflow-hidden rounded-2xl">
            <h2 className="z-10 text-slate-400 text-2xl md:text-4xl">مهمان</h2>
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-gradient-to-b from-[#00B7FF] to-[#FF30FF] w-[80px] h-[300%] md:w-[100px] md:h-[380%] animate-rotateBG absolute"></div>
                <div className="absolute inset-[5px] bg-[#DFF2EB] rounded-lg"></div>
            </div>
        </div>
    );
};

export default Ivent;
