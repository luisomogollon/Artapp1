import React, { useState } from "react";
import { GiShare } from "react-icons/gi";
import { AiOutlineWarning } from "react-icons/ai";
import Modalform from "./Modalform";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  

  //const [ModalForm, setModalForm] = useState (false);

  //const toggleModal = () => {
      //setModalForm(!ModalForm);
   // };




  
  return (
    <>
      <button
        className=" text-indigo w-2  font-bold uppercase text-sm px-1 py-1   outline-none  mr-1 mb- ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 fill-current"
          viewBox="0 0 13 13"
        >
          <GiShare />
          
        </svg>
      </button>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-1 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto  max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-sm shadow-lg p-5 relative flex flex-col w-full bg-gray-50 outline-none focus:outline-none">
                {/*header*/}
               
                <div className="flex items-c text-center justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-lg font-medium leading-1 text-gray-900 text-center  ">
                   Compartir este Cuadro?
                   
                  </h3>
                  
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <div className="relative p-7 flex-auto">
                  <div class="p-1 text-center">
                    <svg
                      aria-hidden="true"
                      class="mx-auto mb-2 w-10 h-10 text-indigo-500 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <AiOutlineWarning />
                    </svg>
                  </div>

                  <p className="text-sm font-bold  text-gray-700 mt-3 tracking-normal  dark:text-gray-600   ">
                    ¿ Estas Seguro de querer Compartir este Certificado? una vez
                    Compartido no hay manera de deshacer esta accion y el
                    certificado sera propiedad del nuevo usuario.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-indigo-500 text-white  active:bg-indigo-600 font-semibold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150"
                    type="button"
                   
                  >
                  Aceptar 
                   <Modalform/>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
