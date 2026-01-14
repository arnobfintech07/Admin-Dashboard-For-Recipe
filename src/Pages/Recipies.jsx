import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Card from "../Components/Card";
import RecipeModal from "./RecipeModal";
import ModalWrapper from "../Components/ModalWrapper";
import ModalWrapper2 from "../Components/ModalWrapper2";
import { baseURL } from "../utils/ configs";

const Recipies = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await axios.get(`${baseURL}api/recipes`);
        setRecipes(data.data.recipes);
      } catch {
        console.log(e);
      }
    };
    getRecipes();
  }, []);

  const CloneRecipe = () => {};

  return (
    <>
      <div>
        <div className="sticky top-0 left-0 z-50">
          <Navbar />
          <div className="flex justify-center bg-red-100"></div>
        </div>
        <div className="flex flex-row">
          <SideBar />
          <div className="m-5 flex-1  h-4">
            <h1 className=" text-3xl rounded shadow">Recipes</h1>
            <button
              className="btn mt-9"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              New Recipe
            </button>
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-10 my-5  pr-20">
              {recipes.map((cardData, index) => (
                <Card key={index} cardData={cardData} />
              ))}
            </div>
            {/* {showModal && <RecipeModal />} */}
            <ModalWrapper>
              <RecipeModal />
            </ModalWrapper>

            <ModalWrapper2>
              <div className=" h-15  shadow pl-5  text-2xl font-bold">
                <h2>Edit Recipe</h2>
              </div>
              <div className="mt-8 pl-1 text-xl font-bold">Recipe Name</div>

              <div className="pl-4 h-10 w-110  rounded-xl mt-2">
                <input type="text" placeholder="Type here" className="input " />
              </div>
              <div className="pl-4 ">
                <div className="card bg-base-100 w-100 shadow-sm mt-10 ">
                  <div className="mt-5 pl-5 font-bold">
                    <h2>Recipe Images</h2>
                  </div>
                  <figure>
                    <img
                      src="https://recipeapp.neurondigital.com/uploads/1537472654recipe_0000_vitchakorn-koonyosying-494170-unsplash.jpg"
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
                <div className="card bg-base-100 w-100 h-180 shadow-sm mt-10 ">
                  <div className="mt-5 pl-2 font-bold">
                    <h2>Recipe Directions</h2>
                  </div>
                  <div>
                    <div className="pl-4 mt-3 font-bold">
                      <h2>Prep. Time(min)</h2>
                    </div>
                    <div className="mt-4 pl-4">
                      <input
                        type="number"
                        placeholder="Type here"
                        className="input border rounded"
                      />
                    </div>
                    <div className="pl-4 mt-3 font-bold">
                      <h2>Cook Time(min)</h2>
                    </div>
                    <div className="mt-4 pl-4">
                      <input
                        type="number"
                        placeholder="Type here"
                        className="input border rounded"
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
                      >
                        <option disabled={true}>Pick Difficulty</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                      </select>
                    </div>
                  </div>
                  <div className="font-bold pl-4 mt-4">
                    <h2>Directions</h2>
                  </div>
                  <div className="" >
                    <div className="card bg-base-100 w-100 shadow-sm  ">
                      <div className="mt-5 pl-5 font-bold">
                        <h2>Recipe Images</h2>
                      </div>
                      <figure>
                        <img
                          src="https://recipeapp.neurondigital.com/uploads/1537472654recipe_0000_vitchakorn-koonyosying-494170-unsplash.jpg"
                          alt="Shoes"
                          className="w-44 rounded-2xl mt-5"
                        />
                      </figure>
                      <div className="card-body">
                        <input type="file" className=" file-input w-90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalWrapper2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipies;
