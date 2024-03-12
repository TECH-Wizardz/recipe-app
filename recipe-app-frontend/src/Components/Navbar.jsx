import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  PlusIcon,
  ArrowPathIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import AddRecipeModel from "./AddRecipeModel";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAddRecipeModelOpen, setAddRecipeModelOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleAddRecipeModel = () => {
    setAddRecipeModelOpen(!isAddRecipeModelOpen);
  };

  return (
    <div className="w-full bg-white shadow-sm px-4 md:px-10 sticky top-0 z-20">
      <div className="max-w-[90rem] py-4 mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-red-600 font-merriweather italic font-bold text-2xl"
        >
          My Recipes
        </Link>

        <div className="flex items-center gap-4 md:gap-10">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-red-color" />
              ) : (
                <svg
                  className="w-6 h-6 text-red-color"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:flex gap-10">
            <Link
              to="/"
              className="flex gap-2 text-gray-800 transition-all items-centern hover:text-red-600"
            >
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>
            <button
              onClick={toggleAddRecipeModel}
              className="flex gap-2 text-gray-800 transition-all items-center hover:text-red-600"
            >
              <PlusIcon className="w-5 h-5" />
              Add a Recipe
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex gap-2 text-gray-800 transition-all items-center hover:text-red-600"
            >
              <ArrowPathIcon className="w-5 h-5" />
              Refresh Page
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="bg-white w-full py-2 px-4">
            <Link
              to="/"
              className="block py-2 text-gray-800 hover:text-red-600"
            >
              Home
            </Link>
            <button
              onClick={toggleAddRecipeModel}
              className="block py-2 text-gray-800 hover:text-red-600"
            >
              Add a Recipe
            </button>
            <button
              onClick={() => window.location.reload()}
              className="block py-2 text-gray-800 hover:text-red-600"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )}

      {isAddRecipeModelOpen && (
        <AddRecipeModel setAddRecipeModelOpen={setAddRecipeModelOpen} />
      )}
    </div>
  );
}

export default Navbar;
