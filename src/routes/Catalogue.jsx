import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineQrCode2, MdShare } from "react-icons/md";
import imagenes from "../assets/imagenes";

const Catalogue = () => {
  const [qrImage, setImage] = useState(false);

 
const [modal, setModal] = useState(false);

const toggleModal = () => {
  setModal(!modal);
};

if(modal) {
  document.body.classList.add('active-modal')
} else {
  document.body.classList.remove('active-modal')
}

  const toggleQR = () => {
    setImage(!qrImage);
  };

  return (
    <div>
      <section className="h-auto  bg-gray-100">
        <div className=" justify-center  text-center py-11 px-10  sm:px-6 lg:px-8 sm:text-center">
          <p className="mt-1 text-4xl  italic font-bold text-gray-700 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Digital Art Catalog
          </p>
        </div>
      </section>

      <button onClick={toggleModal} class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
  Toggle modal
</button>
{modal && (
<div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only" className="close-modal" onClick={toggleModal} >Close modal</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, I'm sure
                </button>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
        </div>
    </div>
</div>
)}
      <div className="bg-gray-100 w-100 min-h-screen gap-6  flex-wrap flex justify-center items-center">
        <div className="w-72 p-2  bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <img
            className="w-full h-auto object-cover  rounded-xl"
            h-40
            object-cover
            rounded-xl
            src={qrImage ? imagenes.img0 : imagenes.img7}
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
              <a href="#_" className="text-indigo-500 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 15 16"
                >
                  <MdShare />
                </svg>
              </a>

              <a href="#_" className="text-indigo-500 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 15 15"
                >
                  <AiOutlineEdit />
                </svg>
              </a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current  text-gray-900 hover:text-indigo-600 cursor-pointer"
                viewBox="0 0 15 15"
                onClick={toggleQR}
              >
                <MdOutlineQrCode2 />
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
              <a href="#_" className="text-indigo-500 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 15 16"
                >
                  <MdShare />
                </svg>
              </a>

              <a href="#_" className="text-indigo-500 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 15 15"
                >
                  <AiOutlineEdit />
                </svg>
              </a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current  cursor-pointer text-gray-900 hover:text-indigo-600 "
                viewBox="0 0 15 15"
              >
                <MdOutlineQrCode2 />
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
              <a href="#_" className="text-indigo-500 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 15 16"
                >
                  <MdShare />
                </svg>
              </a>

              <a href="#_" className="text-indigo-500 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 15 15"
                >
                  <AiOutlineEdit />
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
