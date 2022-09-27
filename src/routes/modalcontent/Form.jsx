import { AiOutlineUserAdd } from "react-icons/ai";

const ModalhtmlForm = () => {
  return (
    <>
      <div className="p-3 bg-  text-center">
        <svg
          
          className="mx-auto mb-1 mt-2 w-10 h-10 text-gray-600 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <AiOutlineUserAdd />
        </svg>
      </div>
      <htmlForm>
        <div className="mb-6 ">
          <label
            htmlFor="email"
            className="block mb-2 text-start text-sm font-medium text-gray-700 "
          >
            User
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-200  focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5 "
            placeholder="User"
          />
        </div>
        <div className="mb-6 ">
          <label
            htmlFor="email"
            className="block mb-2 text-start text-sm font-medium text-gray-700 "
          >
            Nombre
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-200  focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5 "
            placeholder="Nombre Del Usuario"
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Confirmar
          </label>
        </div>
      </htmlForm>
    </>
  );
};

export default ModalhtmlForm;
