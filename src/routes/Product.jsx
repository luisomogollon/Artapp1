import React from "react";
import { useState } from "react";
import imagenes from "../assets/imagenes";
const Product = () => {
  const [cover, setCover] = useState("");

  function handleOnChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

  return (
   <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full space-y-5 md:w-3/5 md:pr-16">
           
            <p className="font-medium text-blue-500 uppercase">
              Upload Your Art and Put a Price on It
            </p>

            <h2 className="text-2xl font-extrabold leading-none text-gray-800 italic sm:text-3xl md:text-5xl">
              Changing The Way People Exhibit Art
            </h2>

            <img alt="imagen 2" src={imagenes.img1}></img>
            <p className="text-xl text-gray-600 md:pr-16"></p>
          </div>

          <div className="w-full mt-16 md:mt-0 md:w-2/5">
            <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
              <h3 className="mb-6 text-2xl font-medium text-center">
                Fill The Form
              </h3>
              <label for="" className="text-xs font-semibold px-1">
                Name
              </label>

              <input
                type="text"
                className="block w-full px-4  py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Picture name "
              />

              <label for="" className="text-xs font-semibold px-1">
                Description
              </label>

              <input
                type="text"
                className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Description"
              />

              <div
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="user_avatar_help"
              ></div>

              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                    Width
                  </label>

                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>

                    <input
                      type="text"
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Width"
                    />
                  </div>
                </div>

                <div className="w-1/2 px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                    Height
                  </label>

                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>

                    <input
                      type="text"
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Height"
                    />
                  </div>
                </div>

                <div className="w-1/2 px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                    Year
                  </label>

                  <div className="flex">
                    <div className="w-10 z-10 pl-1 mt-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>

                    <input
                      type="text"
                      className="w-full -ml-10 pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Year"
                    />
                  </div>
                </div>
              </div>

              <label className="block text-sm  font-medium text-gray-900 dark:text-gray-300">
                Upload Cover
              </label>

              <input
                className="block w-full mb-5 text-sm mt-1 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                name="cover"
                onChange={handleOnChangeFile}
              />
              {cover && (
                <img alt="uploaded cover img" src={cover} width="200" />
              )}

              <label for="" className="text-sm  font-medium ">
                Technique
              </label>

              <input
                type="text"
                className="block w-full px-4 py-3 mb-7   border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="technique"
              />

              <div className="block">
                <button className="w-full px-3 py-4 font-medium text-white bg-indigo-500 hover:bg-purple-700 rounded-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                30.7K
              </h2>

              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                30.8K
              </h2>

              <p class="leading-relaxed">Sellers</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                20k
              </h2>

              <p class="leading-relaxed">Paintings sold so far</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                4
              </h2>
              <p class="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Product;
