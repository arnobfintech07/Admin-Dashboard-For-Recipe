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
     <div>
        <div className="min-h-0 ">
           <div className="modal-title  sticky -top-6  z-100 text-2xl font-bold bg-base-300 -m-6">
          <h2 className="pl-10 py-5">Add Recipe</h2>
        </div>
          <div>
            <p className="pl-6 mt-10 font-bold pb-3 mb-3">Recipe Name</p>
          </div>

          <div>
            <div className="pl-6 ">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                placeholder="eg: Chicken Soup"
                className="input w-full h-20 "
              />
            </div>
          </div>

          <div className="">
            <div className="card bg-base-100 h-120 w-full shadow-sm m-5 ">
            <h2 className="bg-base-200  p-3 rounded">Media</h2>
            <div>
              <h1 className="p-4">Recipe Images</h1>
            </div>
            <div className="pl-4 ">
              <input
                type="file"
                onChange={handleFileChange}
                className=" file-input w-full"
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
                className="pl-3 file-input w-full"
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
                className="pl-3 file-input w-full"
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
                className="pl-3 file-input w-full"
              />
            </div>
          </div>
        </div>
        <div className="card bg-base-100 h-120 w-full shadow-sm m-5    ">
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
              className="input w-full "
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
                className="input w-full "
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
                className="select w-full"
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
                className="input w-full "
              />
          </div>
        </div>
          </div>
        <div className="pl-260">
          <button
            className="btn w-50  btn-primary  
         "
            onClick={AddData}
          >
            Save
          </button>
        </div>
        {responseMessage && (
          <div className="alert alert-info mt-1 w-50 ">{responseMessage}</div>
        )}
      </div>
    </>
  );
};

export default RecipeModal;
