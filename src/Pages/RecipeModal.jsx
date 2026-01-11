import React from "react";

const RecipeModal = () => {
  return (
    <>
      <div className="card bg-base-100 w-110 shadow-sm m-57 h-200 ">
        <div className="min-h-0">
          <figure>
            <h1 className="bg-amber-200 text-2xl rounded shadow w-full pl-5 p-3 min-h-0">
              Edit Recipe
            </h1>
          </figure>
          <div>
            <p className="pl-5 mt-6 font-bold pb-3 mb-3">Recipe Name</p>
          </div>

          <div>
            <div className="pl-5">
            <input
              type="text"
              placeholder="eg: Chicken Soup"
              className="input w-100 "
            />
          </div>
        </div>
        
          <div className="card bg-base-100 h-72 w-100 shadow-sm m-5   ">
            <h2 className="bg-base-200 pl-5 p-3 rounded">Media</h2>
            <div>
              <h1 className="p-4">Recipe Images</h1>
            </div>
            <div className="pl-4 ">
              <input type="file" className=" file-input w-90" />
            </div>
            <div className="">
                <h1 className="p-4">Description</h1>
            </div>
            <div className="pl-4 ">
              <input type="text" placeholder="Give Description" className="pl-3 file-input w-90" />
            </div>
          </div>
          </div>
        <div className="mt-20 ">
          <div className="card bg-base-100 w-100 shadow-sm h-70 m-5  ">
            <h2 className="bg-base-200 pl-5 p-3 rounded">Recipe Directions</h2>
            <div>
              <h1 className="p-4">Prep. Time(min)</h1>
            </div>
            <div className="pl-5">
              <input
                type="text"
                placeholder="eg: give time in min"
                className="input w-90 "
              />
            </div>
            <div className="">
              <h1 className="mt-3 pl-4">Cook Time (min)</h1>

              <div className="mt-3 pl-5">
                <input
                  type="text"
                  placeholder="eg: give time in min"
                  className="input w-90 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeModal;
