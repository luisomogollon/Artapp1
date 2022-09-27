import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function Modalform() {
  const [showModal, setShowModal] = React.useState(false);
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
          Aceptar
        </svg>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-1 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-50 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 text-indigo-500 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-bold  "></h3>
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

                <div className="relative p-6 flex-auto">
                  <div class="p-1 text-center"></div>

                  <div class="p-1 text-center">
                    <svg
                      aria-hidden="true"
                      class="mx-auto mb-1 mt-2 w-10 h-10 text-gray-600 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <AiOutlineUserAdd />
                    </svg>
                  </div>

                  <form>
                    <div class="mb-6 ">
                      <label
                        for="email"
                        class="block mb-2 text-start text-sm font-medium text-gray-700 "
                      >
                        User
                      </label>
                      <input
                        type="text"
                        id="text"
                        class="bg-gray-50 border border-gray-200  focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5 "
                        placeholder="User"
                      />
                    </div>
                    <div class="mb-6 ">
                      <label
                        for="email"
                        class="block mb-2 text-start text-sm font-medium text-gray-700 "
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="text"
                        class="bg-gray-50 border border-gray-200  focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5 "
                        placeholder="User"
                      />
                    </div>
                    <div class="flex items-start mb-6">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <label
                        for="remember"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Confirmar
                      </label>
                    </div>
                  </form>
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
                    className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Aceptar
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
