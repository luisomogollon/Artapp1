import React from "react";
import { Link } from "react-router-dom";
import imagenes from "../assets/imagenes";

function Home() {
  
  return (
    <section className="px-2 pt-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1 className="text-4xl italic text-center font-extrabold tracking-tight  text-gray-900 sm:text-5xl md:text-6xl md:text-center">
          <span className="block">
            Online Art{" "}
            <span className="block mt-1 text-purple-500 lg:inline lg:mt-0">
              Shop Page
            </span>
          </span>
        </h1>

        <p className="w-full italic mx-auto text-center text-gray-500  sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
          Taking Digital Art To The Next Level!
        </p>

        <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
          <button className="flex justify-center items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto">
            <Link to="/Catalogue">Catalogue</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <button className="flex items-center justify-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
            <Link to="/Product">New Product</Link>
          </button>
        </div>
      </div>

      <div className="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
        <img alt="imagen 2" src={imagenes.img4} />
      </div>
    </section>
  );
}

export default Home;
