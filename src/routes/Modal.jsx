import React, { useState } from "react";
import ConfirmationContent from "./modalcontent/Confirmation";
import FormContent from "./modalcontent/Form";

const toggleContent = (content) => {
  switch (content) {
    case "form":
      return <FormContent />;
    default:
      return <ConfirmationContent />;
  }
};

export default function Modal({ onClose }) {
  const [content, setContent] = useState();

  return (
    <>
      {" "}
      <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-1 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto  max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-sm shadow-lg p-5 relative flex flex-col w-full bg-gray-50 outline-none focus:outline-none">
            {toggleContent(content)}
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                className="bg-indigo-500 text-white  active:bg-indigo-600 font-semibold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150"
                type="button"
                onClick={() => setContent("form")}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
