import React, { useState, useEffect } from "react";
import axios from "axios";

const Modal = ({ id }) => {
  // 1. Initialize recipes as an object to match your data structure
  const [recipes, setRecipes] = useState({
    name: "",
    cook_time: "",
    difficulty: "Easy",
    category: "",
    description: "",
    recipe_image: "",
  });

  // State for image preview
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.249:8000/api/recipes/" + id,
        );
        setRecipes(response.data.recipes);
        // Set initial preview to existing image URL
        setPreview(response.data.recipes.recipe_image);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    if (id) fetchRecipes();
  }, [id]);

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipes((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRecipes((prev) => ({ ...prev, recipe_image: file }));
      // Generate a temporary local URL for the preview
      setPreview(URL.createObjectURL(file));
    }
  };

  // 3. Handle PUT request using FormData
  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("name", recipes.name);
      formData.append("cook_time", recipes.cook_time);
      formData.append("difficulty", recipes.difficulty);
      formData.append("category", recipes.category);
      formData.append("description", recipes.description);
      formData.append("how_to_cook", recipes.how_to_cook);
      formData.append("preparation_time", recipes.preparation_time);
      formData.append("ingredients", recipes.ingredients);
      
      

      // formData.append(recipes)

      // Only append the image if it's a file (newly selected)
      // If it's a string, it means the image wasn't changed
      formData.append("recipe_image", recipes.recipe_image);
      console.log("form data: ", recipes);
      const response = await axios.put(
        "http://192.168.0.249:8000/api/recipes/" + id + "/edit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      alert("Recipe updated successfully!");
      console.log("Update response:", response.data);
    } catch (error) {
      console.error("Error updating recipe:", error);
      alert("Failed to update recipe.");
    }
  };

  return (
    <div>
    {/* Edit Recipe Header */}
{/* Edit Recipe Header */}
<div className="sticky top-0 -mx-6 -mt-6 z-20 bg-white dark:bg-base-300 border-b border-base-200">
  <div className="px-6 py-5">
    <h2 className="text-2xl font-bold">Edit Recipe</h2>
  </div>
</div>


      <div>
        <div className="pl-1 text-xl font-bold">Recipe Name</div>
        <div className="h-10 w-full  rounded-xl mt-4">
          <input
            name="name"
            type="text"
            className="input border w-full h-20"
            value={recipes.name || ""}
            onChange={handleChange}
          />
        </div>

        <div className="pl-4">
          <div className="card bg-base-100 w-full shadow-sm mt-20">
            <div className="mt-5 pl-5 font-bold">
              <h2 className="text-xl">Recipe Image</h2>
            </div>
            <figure>
              <img
                src={preview}
                alt="Recipe"
                className="w-44 rounded-2xl mt-5"
              />
            </figure>
            <div className="card-body">
              <input
                type="file"
                name="recipe_image"
                className="file-input file-input-bordered w-full"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        <div className="pl-4">
          <div className="card bg-base-100 w-full shadow-sm mt-10 p-5">
            <div className="font-bold">
              <h2>Recipe Directions</h2>
            </div>

            <div className="mt-3 font-bold">
              <h2>Cook Time (min)</h2>
            </div>
            <input
              name="cook_time"
              type="number"
              className="input border rounded w-full"
              value={recipes.cook_time || ""}
              onChange={handleChange}
            />

            <div className="mt-3 font-bold">
              <h2>Difficulty</h2>
            </div>
            <select
              name="difficulty"
              className="select border rounded w-full"
              value={recipes.difficulty || "Easy"}
              onChange={handleChange}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

            <div className="mt-5 font-bold">
              <h2>Categories</h2>
            </div>
            <input
              name="category"
              type="text"
              className="input border w-full"
              value={recipes.category || ""}
              onChange={handleChange}
            />

            <div className="mt-5 font-bold">
              <h2>Description</h2>
            </div>
            <textarea
              name="description"
              className="textarea border w-full"
              value={recipes.description || ""}
              onChange={handleChange}
            />

            <div className="mt-5 font-bold">
              <h2>How To Cook</h2>
            </div>
            <textarea
              name="how_to_cook"
              className="textarea border w-full"
              value={recipes.how_to_cook || ""}
              onChange={handleChange}
            />
          </div>

          <button
            onClick={handleUpdate}
            className="btn btn-primary mt-5 w-full"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
