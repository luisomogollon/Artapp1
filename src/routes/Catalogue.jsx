import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineQrCode2 } from "react-icons/md";
import imagenes from "../assets/imagenes";

const Catalogue = () => {
  
  return (
    <div>
      <section className="h-auto  bg-gray-100">
        <div className=" justify-center  text-center py-11 px-10  sm:px-6 lg:px-8 sm:text-center">
          <p className="mt-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Digital Art Catalog
          </p>
        </div>
      </section>

      <div className="bg-gray-100 w-100 min-h-screen gap-6  flex-wrap flex justify-center items-center">
        <div className="w-72 p-2  bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <img
            className="w-full h-auto object-cover  rounded-xl"
            h-40
            object-cover
            rounded-xl
            src={imagenes.img7}
            alt=""
          />

          <div className="flex items-center justify-center">
            <img
              className="w-7 h-7 mt-2 rounded-full mr-4"
              src={imagenes.img8}
              alt="Avatar of Writer"
            />
            <div className="text-sm">
              <p className="text-gray-900 font-bold mt-2 leading-none">
                Rafael Martin
              </p>
            </div>
          </div>

          <div className="p-2 ">
            <h2 className="font-bold text-lg mb-2 ">The Face of Sound</h2>
            <p className="text-sm text-gray-600">
              It is a painting that represents the face of sound traveling in
              the air.
            </p>
            <span class="inline-block italic py-2  space-x-10  text-sm font-semibold text-gray-700 mr-2 mb-3 ">
              #Folio 02985
            </span>
          </div>

          <div className="m-1 px-1">
            <button
              href="#"
              className="text-white bg-indigo-500 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              <Link to="/View1">Buy Now</Link>{" "}
            </button>

            <div className="relative flex items-end justify-end space-x-3">
              <a href="#_" className="text-gray-300 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 15 17"
                >
                  <FiEdit2 />
                </svg>
              </a>

              <a href="#_" className="text-gray-300 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current  text-gray-900 hover:text-indigo-600 cursor-pointer"
                viewBox="0 0 15 15"
              >
                <Link to="/Codecard">
                  <MdOutlineQrCode2 />
                </Link>
              </svg>
            </div>
          </div>
        </div>

        <div className="w-72 p-2  bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <img
            className="w-full h-auto object-cover  rounded-xl"
            h-40
            object-cover
            rounded-xl
            src={imagenes.img6}
            alt=""
          />

          <div className="flex items-center justify-center">
            <img
              className="w-7 h-7 mt-2 rounded-full mr-4"
              src={imagenes.img9}
              alt="Avatar of Writer"
            />

            <div className="text-sm">
              <p className="text-gray-900 font-bold mt-2 leading-none">
                Lana Moon
              </p>
            </div>
          </div>

          <div className="p-2 ">
            <h2 className="font-bold text-lg mb-2 ">Twilight Astronaut</h2>

            <p className="text-sm text-gray-600">
              A little astronaut floating through the twilight on a very unlucky
              day.
            </p>

            <span class="inline-block  py-2 italic space-x-10  text-sm font-semibold text-gray-700 mr-2 mb-3 ">
              #Folio 02905
            </span>
          </div>

          <div className="m-2">
            <button
              href="#"
              className="text-white  bg-indigo-500 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              <Link to="/View2">Buy Now</Link>{" "}
            </button>

            <div className="relative flex items-end justify-end space-x-3">
              <a href="#_" className="text-gray-300 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>

              <a href="#_" className="text-gray-300 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current  cursor-pointer text-gray-900 hover:text-indigo-600 "
                viewBox="0 0 15 15"
              >
                <Link to="/Codecard">
                  <MdOutlineQrCode2 />
                </Link>
              </svg>
            </div>
          </div>
        </div>

        <div className="w-72 p-2  bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <img
            className="w-full h-auto object-cover  rounded-xl"
            h-40
            object-cover
            rounded-xl
            src={imagenes.img2}
            alt=""
          />

          <div className="flex items-center justify-center">
            <img
              className="w-7 h-7 mt-2 rounded-full mr-4"
              src={imagenes.img5}
              alt="Avatar of Writer"
            />

            <div className="text-sm">
              <p className="text-gray-900 font-bold mt-2 leading-none">
                Ed Aivazovski
              </p>
            </div>
          </div>

          <div className="p-2 ">
            <h2 className="font-bold text-lg mb-2 ">Infinity Mercury</h2>
            <p className="text-sm text-gray-600">
              This is a three-dimensional design typical of digital, Using the
              tubular concept.{" "}
            </p>

            <span class="inline-block  py-2 italic  space-x-10  text-sm font-semibold text-gray-700 mr-2 mb-3 ">
              #Folio 02765
            </span>
          </div>

          <div className="m-2">
            <button
              href="#"
              className="text-white bg-indigo-500 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              <Link to="/View3">Buy Now</Link>{" "}
            </button>

            <div className="relative flex items-end justify-end space-x-3">
              <a href="#_" className="text-gray-300 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>

              <a href="#_" className="text-gray-300 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current text-gray-900 hover:text-indigo-600 cursor-pointer"
                viewBox="0 0 15 15"
              >
                <Link to="/Codecard">
                  <MdOutlineQrCode2 />
                </Link>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
