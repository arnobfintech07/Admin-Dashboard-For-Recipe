import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "../utils/ configs";

const RecipeModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    recipe_image: null,
    preparation_time: "",
    cook_time: "",
    description: "",
    ingredients: "",
    category: "",
    difficulty: "",
    how_to_cook: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, recipe_image: e.target.files[0] }));
  };

  const AddData = async () => {
    console.log("Posting data...");

    const dataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      dataToSend.append(key, formData[key]);
    });

    console.log(dataToSend);

    try {
      const response = await axios.post(`${baseURL}api/recipes`, dataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResponseMessage("Recipe saved successfully!");
      console.log(response.data);
    } catch (err) {
      if (err.response) {
        console.log("Validation Errors:", err.response.data);
        setResponseMessage(`Error: ${JSON.stringify(err.response.data)}`);
      } else {
        setResponseMessage("Error creating post");
      }
    }
  };

  return (
    <>
     <div className=" shadow m-4 h-350  ">
        <div className="min-h-0">
          <div className="sticky top-0 z-50 bg-base-100">
            <h1 className=" text-2xl rounded shadow w-full pl-5 p-3 min-h-0 border ">
              Add Recipe
            </h1>
          </div>
          <div>
            <p className="pl-5 mt-6 font-bold pb-3 mb-3">Recipe Name</p>
          </div>

          <div>
            <div className="pl-5">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                placeholder="eg: Chicken Soup"
                className="input w-100 "
              />
            </div>
          </div>

          <div className="card bg-base-100 h-120 w-100 shadow-sm m-5   ">
            <h2 className="bg-base-200 pl-5 p-3 rounded">Media</h2>
            <div>
              <h1 className="p-4">Recipe Images</h1>
            </div>
            <div className="pl-4 ">
              <input
                type="file"
                onChange={handleFileChange}
                className=" file-input w-90"
              />
            </div>
            <div className="">
              <h1 className="p-4">Description</h1>
            </div>
            <div className="pl-4 ">
              <input
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                type="text"
                placeholder="Give Description"
                className="pl-3 file-input w-90"
              />
            </div>
            <div className="">
              <h1 className="p-4">Ingredients</h1>
            </div>
            <div className="pl-4 mt">
              <input
                name="ingredients"
                value={formData.ingredients}
                onChange={handleInputChange}
                type="text"
                placeholder="Give Ingredients"
                className="pl-3 file-input w-90"
              />
            </div>
            <div className="">
              <h1 className="p-4">How To Cook</h1>
            </div>
            <div className="pl-4 mt">
              <input
                name="how_to_cook"
                value={formData.how_to_cook}
                onChange={handleInputChange}
                type="text"
                placeholder="Give Steps to cook"
                className="pl-3 file-input w-90"
              />
            </div>
          </div>
        </div>
        <div className="card bg-base-100 h-120 w-100 shadow-sm m-5    ">
          <h2 className="bg-base-200 pl-5 p-3 rounded ">Recipe Directions</h2>
          <div>
            <h1 className="p-4">Prep. Time(min)</h1>
          </div>
          <div className="pl-5">
            <input
              name="preparation_time"
              value={formData.preparation_time}
              onChange={handleInputChange}
              type="text"
              placeholder="eg: give time in min"
              className="input w-90 "
            />
          </div>
          <div className="">
            <h1 className="mt-3 pl-4">Cook Time (min)</h1>

            <div className="mt-3 pl-5">
              <input
                name="cook_time"
                value={formData.cook_time}
                onChange={handleInputChange}
                type="text"
                placeholder="eg: give time in min"
                className="input w-90 "
              />
            </div>
          </div>

          <div className="pl-4 mt-4">
            <h1>Diificulty Level</h1>
          </div>
          <div className="pl-5">
            <fieldset className="fieldset mt-2">
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleInputChange}
                defaultValue="Pick Difficulty"
                className="select"
              >
                <option disabled={true}>Pick Difficulty</option>
                <option value={"easy"}>Easy</option>
                <option value={"medium"}>Medium</option>
                <option value={"hard"}>Hard</option>
              </select>
            </fieldset>
          </div>
          <div className="pl-4 mt-5">
            <h2>Categories</h2>
          </div>

        
           <div className="pl-4 mt-5">

            <input
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                type="text"
                placeholder="Select Category"
                className="input w-90 "
              />
          </div>
        </div>
        <div className="pl-75">
          <button
            className="btn w-30 bg-blue-900 text-white mt-5
         "
            onClick={AddData}
          >
            Save
          </button>
        </div>
        {responseMessage && (
          <div className="alert alert-info mx-5">{responseMessage}</div>
        )}
      </div>
    </>
  );
};

export default RecipeModal;
