import { Menu } from "@headlessui/react";
import Link from "next/link";
const DropDown = () => {
  return (
    <div class="relative inline-block text-left">
      <Menu>
        <Menu.Button
          className="bg-dark-gold px-4 py-2  hover:bg-dark-blue hover:text-dark-gold focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </Menu.Button>
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <Link href="/">
            <Menu.Item
              as="button"
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 overflow-hidden"
            >
              Home
            </Menu.Item>
          </Link>
          <Link href="/about">
            <Menu.Item
              as="button"
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              About Soho
            </Menu.Item>
          </Link>
          <div className="flex ">
            <Menu.Item
              as="button"
              className="text-black w-1/2 text-center bg-red-500 px-2 py-2"
            >
              En
            </Menu.Item>
            <Menu.Item
              as="button"
              className="text-black w-1/2 text-center bg-blue-500 px-2 py-2"
            >
              Fr
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default DropDown;
