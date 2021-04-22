import Link from "next/link";

import DropDown from "./DropDown";
import Get from "../components/ContactForm";

const CallButton = () => (
  <button className="bg-dark-gold px-4 py-2  hover:bg-dark-blue hover:text-dark-gold focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white">
    <a href="tel:514-884-0474">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        <path d="M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z" />
      </svg>
    </a>
  </button>
);

export default function Navbar() {
  return (
    <header className="sm:px-2 px-0 pr-2 ">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-16 flex justify-between">
          <div className="flex items-center space-x-0 sm:space-x-2 text-white">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <Link href="/">
                <img
                  className="block h-12 w-auto"
                  src="/images/logo.png"
                  alt="Workflow"
                />
              </Link>
            </div>

            <button className="hidden sm:underline sm:inline-flex sm:items-center sm:text-sm sm:font-medium">
              {" "}
              <div className="flex space-x-1">
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Tapis+Soho+Carpets/@45.521521,-73.596163,17z/data=!3m2!4b1!5s0x4cc91bd57a029cc7:0x61719ab39a6faa34!4m5!3m4!1s0x4cc91b928f9d2ac9:0x87ad076bca1f967e!8m2!3d45.5215173!4d-73.5939743"
                >
                  Montréal
                </a>
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

          <div className="flex items-center space-x-2">
            <CallButton />
            <Get />
            <DropDown />
          </div>
        </div>
      </div>
    </header>
  );
}
