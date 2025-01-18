import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Form2() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    city: "",
    job: "",
    education: "",
    residence: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "این فیلد باید پر شود";
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("http://185.208.175.233:5001/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            password: formData.password,
            phone_number: formData.number,
            city: formData.city,
            home_address: formData.residence,
            education: formData.education,
            job: formData.job,
          }),
        });

        if (!response.ok) {
          throw new Error("ثبت‌نام ناموفق بود");
        }

        Swal.fire({
          icon: "success",
          title: "موفقیت",
          text: "فرم با موفقیت ارسال شد!",
          confirmButtonText: "باشه",
        }).then(() => navigate("/login"));
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "خطا در ارسال فرم. لطفاً دوباره تلاش کنید.",
          confirmButtonText: "تأیید",
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "خطا در اعتبارسنجی",
        text: "لطفاً تمامی فیلدهای الزامی را پر کنید.",
        confirmButtonText: "باشه",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-24">
      <Navbar />
      <form
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="space-y-6">
          {/* فیلد نام */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-xl font-BNazanin font-medium text-gray-900 text-right"
            >
              نام <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
          </div>

          {/* فیلد نام خانوادگی */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-xl font-BNazanin font-medium text-gray-900 text-right"
            >
              نام خانوادگی <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="last-name"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* فیلد ایمیل */}
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-BNazanin font-medium text-gray-900 text-right"
            >
              ایمیل <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* فیلد شماره تلفن */}
          <div>
            <label
              htmlFor="number"
              className="block text-xl font-BNazanin font-medium text-gray-900 text-right"
            >
              شماره تلفن <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="number"
                name="number"
                type="tel"
                value={formData.number}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right"
              />
              {errors.number && (
                <p className="text-red-500 text-sm mt-1">{errors.number}</p>
              )}
            </div>
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-xl font-BNazanin font-medium text-gray-900 text-right"
            >
              شهر <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
                value={formData.city}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>
          </div>

          {/* Job */}
          <div>
            <label
              htmlFor="job"
              className="block text-xl font-BNazanin font-medium text-gray-900 text-right"
            >
              شغل <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="job"
                name="job"
                type="text"
                value={formData.job}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right"
              />
              {errors.job && (
                <p className="text-red-500 text-sm mt-1">{errors.job}</p>
              )}
            </div>
          </div>

          {/* Education */}
          <div>
            <label
              htmlFor="education"
              className="block text-xl font-BNazanin font-medium text-gray-900 text-right"
            >
              تحصیلات <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="education"
                name="education"
                type="text"
                value={formData.education}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right"
              />
              {errors.education && (
                <p className="text-red-500 text-sm mt-1">{errors.education}</p>
              )}
            </div>
          </div>

          {/* Residence */}
          <div>
            <label
              htmlFor="residence"
              className="block text-xl font-BNazanin font-medium text-gray-900 text-right"
            >
              محل سکونت <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="residence"
                name="residence"
                type="text"
                value={formData.residence}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right"
              />
              {errors.residence && (
                <p className="text-red-500 text-sm mt-1">{errors.residence}</p>
              )}
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-xl font-BNazanin font-medium text-gray-900 text-right"
            >
              رمز عبور <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 text-right"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>

           {/* دکمه ورود و عضویت */}
           <div className="flex justify-between">
            <button
              type="submit"
              className="w-[48%] py-2 px-4 text-white rounded-md bg-[#7AB2D3] hover:bg-[#6A9BC2] text-xl font-BNazanin"
            >
              عضویت
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-[48%] py-2 px-4 text-white rounded-md bg-[#7AB2D3] hover:bg-[#6A9BC2] text-xl font-BNazanin"
            >
              ورود
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}