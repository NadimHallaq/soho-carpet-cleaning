import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { CheckIcon } from "@heroicons/react/outline";
export default function Form({ close }) {
  const [thanks, setThanks] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setThanks(!thanks);
  };
  return (
    <div>
      {!thanks ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <h1 className="text-xl font-bold leading-6 text-gray-900 pt-4">
            Get Quote
          </h1>

          <div className="flex flex-col items-start">
            <label
              htmlFor="carpet_type"
              className="block text-sm font-medium text-gray-700"
            >
              Carpet Type
            </label>
            <select
              {...register("carpet_type")}
              id="carpet_type"
              name="carpet_type"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md text-black"
              defaultValue="Residential"
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div className="flex flex-col mt-4">
            <label
              htmlFor="name"
              className="flex text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-black"
                placeholder="Your name"
              />{" "}
            </div>{" "}
            {errors.name && (
              <h1 className="flex text-red-500 mt-1">this is required</h1>
            )}
          </div>
          <div className="flex flex-col mt-3">
            <label
              htmlFor="email"
              className="flex text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                {...register("email")}
                type="text"
                name="email"
                id="email"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-black"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="phone_number"
              className="flex text-sm font-medium text-gray-700 "
            >
              Phone Number
            </label>
            <div className="mt-1">
              <input
                {...register("phone_number", {
                  required: true,
                  valueAsNumber: true,
                })}
                type="number"
                name="phone_number"
                id="phone_number"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-black"
                placeholder="514 123 4567"
              />
            </div>
          </div>
          {errors.phone_number && (
            <h1 className="flex text-red-500 mt-1">
              Please enter a valid number
            </h1>
          )}
          <button
            type="submit"
            className="text-dark-white bg-dark-gold  w-full py-2 mt-4"
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-dark-gold">
            <CheckIcon className="h-6 w-6 text-white " aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <h3 as="h3" className="text-lg leading-6 font-medium text-gray-900">
              Thank You
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                On of Our agents will contact you shortly.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="text-dark-white bg-dark-gold  w-full py-2 mt-4"
            onClick={close}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
