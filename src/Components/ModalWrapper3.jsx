import React, { useState } from "react";
import { baseURL } from "../utils/ configs";
import axios from "axios";

const ModalWrapper3 = () => {
  const [formData, setFormData] = useState({
    category_name: "",
    category_image: null,
    category_description: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, category_image: e.target.files[0] }));
  };
  const AddData = async () => {
    console.log("Posting data...");

    const dataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      dataToSend.append(key, formData[key]);
    });

    console.log(dataToSend);

    try {
      const response = await axios.post(
        `${baseURL}api/categories`,
        dataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      setResponseMessage("Category saved successfully!");
      console.log(response.data);
    } catch (err) {
      if (err.response) {
        console.log("Validation Errors:", err.response.data);
        setResponseMessage(`Error: ${JSON.stringify(err.response.data)}`);
      } else {
        setResponseMessage("Error creating Category");
      }
    }
  };

  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className=" h-20 shadow ">
            <h1>Edit Category</h1>
          </div>
          <div className="mt-6">
            <h2 className="mb-5">Category Name</h2>
            <input
              name="category_name"
              value={formData.category_name}
              onChange={handleInputChange}
              type="text"
              className="border"
              placeholder="eg: Veg-Food"
            />
          </div>

          <div className="mt-6">
            <h1 className="p-4">Category Image</h1>
          </div>
          <div className="pl-4 ">
            <input
              type="file"
              onChange={handleFileChange}
              className=" file-input w-90"
            />
          </div>
          <div className="mt-6">
            <h2 className="mb-5">Category Description</h2>
            <div className="pl-4 ">
              <textarea
                name="category_description"
                value={formData.category_description}
                onChange={handleInputChange}
                type="text"
                placeholder="Give Description"
                className="pl-3 file-input w-90"
              />
            </div>
          </div>
          <div className="mt-2  justify-between flex">
            <button className="btn" onClick={AddData}>Save</button>
            <button className="btn">Delete</button>
          </div>
          {responseMessage && (
          <div className="alert alert-info mx-5">{responseMessage}</div>
        )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
        
      </dialog>
       
    </>
  );
};

export default ModalWrapper3;
