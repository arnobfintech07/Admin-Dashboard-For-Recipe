import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Card from "../Components/Card";
import RecipeModal from "./RecipeModal";
import ModalWrapper from "../Components/ModalWrapper";
import ModalWrapper2 from "../Components/ModalWrapper2";
import { baseURL } from "../utils/ configs";
import Modal from "../Components/Modal";
import Test from "../Components/Test";


const Recipies = () => {

  
  const [recipes, setRecipes] = useState([]);
  const [id, setId] = useState(0);
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


  const deleteRecipe = async (recipeId) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        // According to your URL structure: http://192.168.0.249:8000/api/recipes/{id}/delete
        await axios.delete(`${baseURL}api/recipes/${recipeId}/delete`);
        
        // Update state to remove the deleted recipe from UI
        setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
        alert("Recipe deleted successfully");
      } catch (error) {
        console.error("Error deleting recipe:", error);
        alert("Failed to delete recipe");
      }
    }
  };

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
            <div className="flex flex-col lg:flex-row lg:flex-wrap  gap-10 my-5  pr-20">
              <Test data={recipes} setId={setId} deleteRecipe={deleteRecipe}/>
            </div>
            {/* {showModal && <RecipeModal />} */}
            <ModalWrapper>
              <RecipeModal />
            </ModalWrapper>

            <div>
              <ModalWrapper2>
                <Modal id={id} />
              </ModalWrapper2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipies;
