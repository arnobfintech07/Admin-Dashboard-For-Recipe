import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Modal = ({id}) => {
  console.log(id)
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.249:8000/api/recipes/"+id,
        );
        setRecipes(response.data.recipes);

        console.log(response.data.recipes)
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [id]);

  return (
    <div>
      <div className="modal-title  sticky -top-6  z-100 text-2xl font-bold bg-base-100 -mt-6">
        <h2 className="py-5">Edit Recipe</h2>
      </div>
      <div>
        <div className=" pl-1 text-xl font-bold">Recipe Name</div>

        <div className="pl- h-10 w-full  rounded-xl mt-4">
        <h1 type="text" placeholder="Type here" className="textarea "> {recipes.name} </h1>
        </div>
        <div className="pl-4 ">
          <div className="card bg-base-100 w-100 shadow-sm mt-20 ">
            <div className="mt-5 pl-5 font-bold">
              <h2 className="text-xl">Recipe Image</h2>
            </div>
            <figure>
              <img
                src= {recipes.recipe_image}
                alt="Shoes"
                className="w-44 rounded-2xl mt-5"
              />
            </figure>
            <div className="card-body">
              <input type="file" className=" file-input w-90" />
            </div>
          </div>
        </div>
        <div className="pl-4 ">
          <div className="card bg-base-100 w-100 h-120 shadow-sm mt-10 ">
            <div className="mt-5 pl-2 font-bold">
              <h2>Recipe Directions</h2>
            </div>
            <div>
              <div className="pl-4 mt-3 font-bold">
                <h2>Cook Time(min)</h2>
              </div>
              <div className="mt-4 pl-4">
                <input
                  type="number"
                  placeholder="Type here"
                  className="input border rounded"
                  value={recipes.cook_time}
                />
              </div>
              <div className="pl-4 mt-3 font-bold">
                <h2>Difficulty</h2>
              </div>
              <div className="mt-4 pl-4">
                <select
                  name="difficulty"
                  defaultValue="Pick Difficulty"
                  className="select border rounded"
                  value={recipes.difficulty}
                >
                  <option disabled={true}>Pick Difficulty</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
              <div className="pl-4 mt-5">
                <h2>Categories</h2>
              </div>
              <div className="pl-4 mt-5">
                <input
                  name="category"
                  type="text"
                  placeholder="Select Category"
                  className="input w-90 "
                  value={recipes.category}
                />
              </div>
              <div className="">
                <h1 className="p-4">Description</h1>
              </div>
              <div className="pl-4 ">
                <input
                  name="description"
                  type="text"
                  placeholder="Give Description"
                  className="pl-3 file-input w-90"
                  value={recipes.description}
                />
              </div>
            </div>
          </div>
          <button className="btn btn-primary mt-5 w-25">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
