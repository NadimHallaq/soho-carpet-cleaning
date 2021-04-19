import { Menu } from "@headlessui/react";
import Link from "next/link";
const DropDown = () => {
  return (
    <div class="relative inline-block text-left">
      <Menu>
        <Menu.Button
          className="bg-dark-gold px-4 py-2 rounded-md"
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none py-1">
          <Menu.Item
            as="a"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            as="a"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <Link href="/">Residential</Link>
          </Menu.Item>
          <Menu.Item
            as="a"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <Link href="/">Commercial</Link>
          </Menu.Item>
          <Menu.Item
            as="a"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <Link href="/">About us</Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default DropDown;
