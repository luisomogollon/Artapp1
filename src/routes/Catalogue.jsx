import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineQrCode2, MdShare } from "react-icons/md";
import imagenes from "../assets/imagenes";
import Modal from "./Modal";

const Catalogue = () => {
  const [qrImage, setImage] = useState(false);
  const [showModal, toggleModal] = useState(false);
  const toggleQR = () => {
    setImage(!qrImage);
  };
  const onCloseModal = () => toggleModal(false);
  return (
    <div>
      <section className="h-auto  bg-gray-100">
        <div className=" justify-center  text-center py-11 px-10  sm:px-6 lg:px-8 sm:text-center">
          <p className="mt-1 text-4xl  italic font-bold text-gray-700 sm:text-5xl sm:tracking-tight lg:text-5xl">
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
            <span className="inline-block italic py-2  space-x-10  text-sm font-semibold text-gray-700 mr-2 mb-3 ">
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
              {showModal && <Modal onClose={onCloseModal} />}
              <button 
                className="text-indigo-500 hover:text-gray-400" 
                onClick={()=>toggleModal(true)}
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-9 fill-current"
                  viewBox="0 0 14 15"
                >
                  <MdShare />
                </svg>
              </button>

              <button className="text-indigo-500 hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-9   fill-current"
                  viewBox="0 0 15 15"
                >
                  <AiOutlineEdit />
                </svg>
              </button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6  h-9 fill-current  text-gray-900 hover:text-indigo-600 cursor-pointer"
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

            <span className="inline-block  py-2 italic space-x-10  text-sm font-semibold text-gray-700 mr-2 mb-3 ">
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

            <span className="inline-block  py-2 italic  space-x-10  text-sm font-semibold text-gray-700 mr-2 mb-3 ">
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
