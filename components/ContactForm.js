import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useEffect, useState } from "react";

const Example = () => (
  <div className="flex flex-col ">
    <label htmlFor="email" className="flex text-sm font-medium text-gray-700">
      Email
    </label>
    <div className="mt-1">
      <input
        type="text"
        name="email"
        id="email"
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="you@example.com"
      />
    </div>
  </div>
);

export default function Get() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef();

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center ">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center px-2 sm:px-4 py-1 border border-transparent  text-sm     bg-dark-gold hover:bg-dark-blue hover:text-dark-gold focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white"
        >
          Get QUOTE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 "
          initialFocus={cancelButtonRef}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block align-middle h-screen "
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg  bg-white transition-all transform space-y-4 p-4 sm:p-12">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold leading-6 text-gray-900 pt-4"
                >
                  Get Quote
                </Dialog.Title>
                <Example />
                <Example />
                <Example />
                <button
                  type="button"
                  className="text-white bg-black  w-full py-2"
                  onClick={closeModal}
                >
                  Submit
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
