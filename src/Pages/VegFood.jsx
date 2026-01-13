import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Card from "../Components/Card";
import { baseURL } from "../utils/ configs";

const VegFood = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await axios.get(`${baseURL}api/recipes?category=Veg`);
        setRecipes(data.data.recipes);
      } catch {
        console.log(e);
      }
    };
    getRecipes();
  }, []);

  return (
    <>
      
      <>
      <div>
        <div className="sticky top-0 left-0 z-50">
          <Navbar />
          <div className="flex justify-center bg-red-100"></div>
        </div>
        <div className="flex flex-row">
          <SideBar />
          <div className="m-5 flex-1  h-4">
          <div className="m-5 text-3xl  flex-1 h-15 shadow  ">
            <h2 className=" mt-1 pl-4">Veg Recipe</h2>
            <button className="btn mt-10">Add Veg-Food</button>
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-10 my-5 mt-20 pr-20">
          {recipes.map((cardData, index) => (
            <Card key={index} cardData={cardData} />
          ))}
        </div> 
        </div>
        
        </div> 
      </div>
    </>
    </>
  );
};

export default VegFood;
