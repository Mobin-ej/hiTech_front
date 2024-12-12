import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Form1() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          {/* <h2 className="text-base/7 font-semibold text-gray-900" >مشخصات</h2> */}
          {/* <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 ml-2 sm:grid-cols-6">
            {/* First Name */}
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-xl font-BNazanin  font-medium text-gray-900">
                نام
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-64 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-xl font-BNazanin font-medium text-gray-900">
                نام خانوادگی
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-64 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-xl font-BNazanin font-medium text-gray-900">
                ایمیل
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-64 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-xl font-BNazanin font-medium text-gray-900 ">
                شماره تماس
              </label>
              <div className="mt-2 ">
                <input
                  id="number"
                  name="number"
                  type="text"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Country */}
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-xl font-BNazanin font-medium text-gray-900">
                شهر
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>تبریز</option>
                  <option>تهران</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            {/* Street Address */}
            {/* <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  name="street-address"
                  type="text"
                  autoComplete="street-address"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div> */}

            {/* City */}
            <div className="sm:col-span-3">
              <label htmlFor="city" className="block text-xl font-BNazanin font-medium text-gray-900">
                شغل
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* State */}
            <div className="sm:col-span-3">
              <label htmlFor="state" className="block text-xl font-BNazanin font-medium text-gray-900">
                رشته تحصیلی
              </label>
              <div className="mt-2">
                <input
                  id="state"
                  name="state"
                  type="text"
                  autoComplete="address-level1"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
