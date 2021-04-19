import Link from "next/link";
import DropDown from "./DropDown";

export default function Navbar() {
  return (
    <header className=" px-2">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-16 flex justify-between">
          <div className="flex items-center space-x-2 text-white">
            <div class="flex-shrink-0 flex items-center">
              <img
                class="block h-12 w-auto"
                src="/images/logo.png"
                alt="Workflow"
              />
            </div>

            <button className="underline inline-flex items-center text-sm font-medium">
              {" "}
              <div className="flex space-x-1">
                <a>Montréal</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-4 text-yellow-400 ">
            <Link href="/">
              <a className="text-dark-white hover:bg-gray-700 hover:text-dark-gold rounded-md py-2 px-3 inline-flex items-center text-sm font-medium">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="text-dark-white hover:bg-gray-700 hover:text-dark-gold rounded-md py-2 px-3 inline-flex items-center text-sm font-medium">
                Residential
              </a>
            </Link>
            <Link href="/">
              <a className="text-dark-white hover:bg-gray-700 hover:text-dark-gold rounded-md py-2 px-3 inline-flex items-center text-sm font-medium">
                Commercial
              </a>
            </Link>
            <Link href="/">
              <a className="text-dark-white hover:bg-gray-700 hover:text-dark-gold rounded-md py-2 px-3 inline-flex items-center text-sm font-medium">
                About Us
              </a>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-2 text-white">
            <button className=" outline-none ring-0">
              {" "}
              <a className="inline-flex items-center text-sm font-medium mr-2">
                514-884-0474
              </a>
            </button>
          </div>
          <div className="sm:hidden flex items-center space-x-2">
            <div>
              <button className="bg-dark-gold px-4 py-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  <path d="M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z" />
                </svg>
              </button>
            </div>{" "}
            <div>
              <DropDown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
