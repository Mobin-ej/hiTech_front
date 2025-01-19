import React, { useEffect, useState } from 'react';
import moment from 'jalali-moment'; // اضافه کردن کتابخانه برای تبدیل تاریخ
import './Ivent.css'; 

const Ivent = () => {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`http://185.208.175.233:5001/api/latest-event`);
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem("id", data.id);
                    localStorage.setItem("image_path", data.image_path);

                    // تبدیل تاریخ به شمسی
                    data.date = moment(data.date, 'YYYY-MM-DD')
                        .locale('fa')
                        .format('jYYYY/jMM/jDD');
                    
                    setEventData(data);
                } else {
                    console.error('Error fetching event data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchEventData();
    }, []);

    if (!eventData) {
        return <div>در حال بارگذاری...</div>;
    }

    const { title, description, date, person_in_charge, time, address } = eventData;

    return (
        <div className="card relative flex items-center justify-center w-[97%] md:w-[80%] h-[250px] md:h-[254px] overflow-hidden rounded-2xl">
            <h2 className="z-10 text-gray-400 text-2xl md:text-3xl font-BNazanin text-right absolute top-4 ">{title}</h2>
            <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-gradient-to-b from-[#00B7FF] via-[#c0dcc4] to-[#ff0000] w-[500px] h-[300%] md:w-[600px] md:h-[380%] animate-rotateBG absolute"></div>
                <div className="absolute font- inset-[5px] bg-[#ffffff] rounded-lg p-4    text-right">
                    <p className="text-lg md:text-xl mt-8  text-right">{description}</p>
                    <p className="text-lg md:text-xl text-right">تاریخ: {date}</p>
                    <p className="text-lg md:text-xl text-right">مسئول: {person_in_charge}</p>
                    <p className="text-lg md:text-xl text-right">زمان: {time}</p>
                    <p className="text-lg md:text-xl text-right">آدرس: {address}</p>
                </div>
            </div>
        </div>
    );
};

export default Ivent;
