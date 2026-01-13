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

            {/* <ModalWrapper2>
              

            </ModalWrapper2> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipies;
