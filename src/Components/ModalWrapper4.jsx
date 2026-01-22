import React, { useState, useEffect } from "react";
import axios from "axios";
import { SiCliqz } from "react-icons/si";

const ModalWrapper4 = ({ id }) => {
  const [categories, setCategories] = useState({
    category_name: "",
    category_image: "",
    category_description: "",
  });
  const [preview, setPreview] = useState("");

  // Fetch individual category data when ID changes
  useEffect(() => {
    const fetchCategoryById = async () => {
      if (!id) return;
      try {
        const response = await axios.get(
          "http://192.168.0.249:8000/api/categories/" + id,
        );
        // Adjust based on your API response structure (usually response.data.categories)
        const data = response.data.category;
        console.log(data);
        setCategories(data);
        setPreview(data.data.category.category_image);
        console.log(id);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    fetchCategoryById();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategories((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCategories((prev) => ({ ...prev, category_image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("category_name", categories.category_name);
      formData.append("category_image", categories.category_image);
      formData.append("category_description", categories.category_description);
      // formData.append(recipes)

      // Only append the image if it's a file (newly selected)
      // If it's a string, it means the image wasn't changed
      console.log("form data: ", categories);
      const response = await axios.put(
        "http://192.168.0.249:8000/api/categories/" + id + "/edit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      alert("Categories updated successfully!");
      console.log("Update response:", response.data);
    } catch (error) {
      console.error("Error updating recipe:", error);
      alert("Failed to update recipe.");
    }
  };

  return (
    <dialog id="my_modal_6" className="modal">
      <div className="modal-box h-150">
        <div className="rounded h-17 shadow-xl text-3xl">
          <h1>Edit Category</h1>
        </div>

        <div>
          <h2 className="text-2xl mt-4">Edit Name</h2>
          <input
            name="category_name" // Must match state key
            type="text"
            className="input border w-full"
            value={categories?.category_name || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <h2 className="text-2xl mt-4">Edit Description</h2>
          <textarea
            name="category_description" // Must match state key
            className="border w-full h-20 rounded mt-4 p-2"
            value={categories?.category_description || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <h2 className="text-2xl mt-4">Edit Image</h2>
          <div className="card bg-base-100 w-96 h-60 shadow-sm mt-5 overflow-hidden">
            <figure className="h-full">
              <img
                className="h-full object-cover"
                src={categories?.category_image}
                alt="Category"
              />
            </figure>
          </div>
          <input
            type="file"
            className="file-input mt-2"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <button
            onClick={handleUpdate}
            className="btn btn-primary mt-5 w-full"
          >
            Save Changes
          </button>{" "}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ModalWrapper4;
