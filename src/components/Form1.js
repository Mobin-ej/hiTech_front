import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";

export default function Form1() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        city: "",
        job: "",
        education: "",
    });

    const [errors, setErrors] = useState({});
    const id = localStorage.getItem("id");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = "این فیلد باید پر شود";
            }
        });
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const isConfirmed = window.confirm("برای ثبت نام مطمئن هستید؟");
            if (isConfirmed) {
                try {
                    const response = await fetch(
                        `http://185.208.175.233:5001/register_event/${id}`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name: formData.firstName,
                                last_name: formData.lastName,
                                email: formData.email,
                                phone_number: formData.number,
                                city: formData.city,
                                job: formData.job,
                                education: formData.education,
                                home_address: "",
                            }),
                        }
                    );

                    if (response.ok) {
                        alert("فرم با موفقیت ارسال شد!");
                    } else {
                        alert("خطا در ارسال فرم");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    alert("خطا در ارسال فرم");
                }
            }
        }
    };

    return ( <
        div className = "flex items-center justify-center min-h-screen mt-24 " >
        <
        Navbar / >
        <
        form className = "w-full max-w-md p-6 bg-white rounded-lg shadow-md"
        onSubmit = { handleSubmit } >
        <
        div className = "space-y-6" > { " " } { /* First Name */ } { " " } <
        div >
        <
        label htmlFor = "first-name"
        className = "block text-xl font-BNazanin font-medium text-gray-900 text-right" >
        نام < span className = "text-red-500" > * < /span>{" "} <
        /label>{" "} <
        div className = "mt-2" >
        <
        input id = "first-name"
        name = "firstName"
        type = "text"
        autoComplete = "given-name"
        value = { formData.firstName }
        onChange = { handleChange }
        className = "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right" /
        > { " " } {
            errors.firstName && ( <
                p className = "text-red-500 text-sm mt-1" > { " " } { errors.firstName } { " " } <
                /p>
            )
        } { " " } <
        /div>{" "} <
        /div>{" "} { /* Last Name */ } { " " } <
        div >
        <
        label htmlFor = "last-name"
        className = "block text-xl font-BNazanin font-medium text-gray-900 text-right" >
        نام خانوادگی < span className = "text-red-500" > * < /span>{" "} <
        /label>{" "} <
        div className = "mt-2" >
        <
        input id = "last-name"
        name = "lastName"
        type = "text"
        autoComplete = "family-name"
        value = { formData.lastName }
        onChange = { handleChange }
        className = "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right" /
        > { " " } {
            errors.lastName && ( <
                p className = "text-red-500 text-sm mt-1" > { errors.lastName } < /p>
            )
        } { " " } <
        /div>{" "} <
        /div>{" "} { /* Email */ } { " " } <
        div >
        <
        label htmlFor = "email"
        className = "block text-xl font-BNazanin font-medium text-gray-900 text-right" >
        ایمیل < span className = "text-red-500" > * < /span>{" "} <
        /label>{" "} <
        div className = "mt-2" >
        <
        input id = "email"
        name = "email"
        type = "email"
        autoComplete = "email"
        value = { formData.email }
        onChange = { handleChange }
        className = "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right" /
        > { " " } {
            errors.email && ( <
                p className = "text-red-500 text-sm mt-1" > { errors.email } < /p>
            )
        } { " " } <
        /div>{" "} <
        /div>{" "} { /* Phone Number */ } { " " } <
        div >
        <
        label htmlFor = "number"
        className = "block text-xl font-BNazanin font-medium text-gray-900 text-right" >
        شماره تماس < span className = "text-red-500" > * < /span>{" "} <
        /label>{" "} <
        div className = "mt-2" >
        <
        input id = "number"
        name = "number"
        type = "text"
        autoComplete = "tel"
        value = { formData.number }
        onChange = { handleChange }
        className = "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right" /
        > { " " } {
            errors.number && ( <
                p className = "text-red-500 text-sm mt-1" > { errors.number } < /p>
            )
        } { " " } <
        /div>{" "} <
        /div>{" "} { /* City */ } { " " } <
        div >
        <
        label htmlFor = "country"
        className = "block text-xl font-BNazanin font-medium text-gray-900 text-right" >
        شهر < span className = "text-red-500" > * < /span>{" "} <
        /label>{" "} <
        div className = "mt-2 relative" >
        <
        select id = "country"
        name = "city"
        value = { formData.city }
        onChange = { handleChange }
        className = "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 text-right appearance-none" >
        <
        option value = "" > انتخاب کنید < /option>{" "} <
        option value = "تبریز" > تبریز < /option>{" "} <
        option value = "تهران" > تهران < /option>{" "} <
        /select>{" "} {
            errors.city && ( <
                p className = "text-red-500 text-sm mt-1" > { errors.city } < /p>
            )
        } { " " } <
        /div>{" "} <
        /div>{" "} { /* Job */ } { " " } <
        div >
        <
        label htmlFor = "job"
        className = "block text-xl font-BNazanin font-medium text-gray-900 text-right" >
        شغل < span className = "text-red-500" > * < /span>{" "} <
        /label>{" "} <
        div className = "mt-2" >
        <
        input id = "job"
        name = "job"
        type = "text"
        value = { formData.job }
        onChange = { handleChange }
        className = "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right" /
        > { " " } {
            errors.job && ( <
                p className = "text-red-500 text-sm mt-1" > { errors.job } < /p>
            )
        } { " " } <
        /div>{" "} <
        /div>{" "} { /* Education */ } { " " } <
        div >
        <
        label htmlFor = "education"
        className = "block text-xl font-BNazanin font-medium text-gray-900 text-right" >
        رشته تحصیلی < span className = "text-red-500" > * < /span>{" "} <
        /label>{" "} <
        div className = "mt-2" >
        <
        input id = "education"
        name = "education"
        type = "text"
        value = { formData.education }
        onChange = { handleChange }
        className = "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right" /
        > { " " } {
            errors.education && ( <
                p className = "text-red-500 text-sm mt-1" > { " " } { errors.education } { " " } <
                /p>
            )
        } { " " } <
        /div>{" "} <
        /div>{" "} { /* Submit Button */ } { " " } <
        div >
        <
        button type = "submit"
        className = "w-full py-2 px-4 text-white rounded-md bg-[#7AB2D3] hover:bg-[#6A9BC2] text-xl font-BNazanin" >
        ثبت نام { " " } <
        /button>{" "} <
        /div>{" "} <
        /div>{" "} <
        /form>{" "} <
        /div>
    );
}