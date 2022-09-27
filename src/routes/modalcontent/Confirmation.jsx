import { AiOutlineWarning } from "react-icons/ai";

const ConfirmationContent = () => {
  return (
    <>
      <div className="flex items-c text-center justify-between p-3 border-b border-solid border-slate-200 rounded-t">
        <h3 className="text-lg font-extrabold leading-1 italic text-gray-900   ">
          ¿Compartir Este Cuadro?
        </h3>
      </div>
      <div className="relative p-7 flex-auto">
        <div className="p-1 text-center">
          <svg
            aria-hidden="true"
            className="mx-auto mb-2 w-10 h-10 text-indigo-500 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <AiOutlineWarning />
          </svg>
        </div>

        <p className="text-sm font-semibold leading-5 text-start  text-gray-700 mt-3 tracking-normal  dark:text-gray-600   ">
          ¿ Estas Seguro de querer Compartir este Certificado? una vez
          Compartido no hay manera de deshacer esta accion y el certificado sera
          propiedad del nuevo usuario.
        </p>
      </div>
    </>
  );
};

export default ConfirmationContent;