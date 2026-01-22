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
      <dialog id="my_modal_2" className="modal  ">
        <div className="modal-box  h-150  ">
          <div className=" h-10 shadow ">
            <h3>Add Category</h3>
          </div>
          <div className="mt-6">
            <h2 className="mb-5 text-xl">Category Name</h2>
            <input
              name="category_name"
              value={formData.category_name}
              onChange={handleInputChange}
              type="text"
              className="border w-99 rounded pl-5 text-xl "
              placeholder="eg: Veg-Food"
            />
          </div>

          <div className="mt-6">
            <h1 className="text-xl">Category Image</h1>
          </div>
          <div className="mt-4">
            <input
              type="file"
              onChange={handleFileChange}
              className=" file-input w-100"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-xl">Category Description</h2>
            <div className="mt-4">
              <textarea
                name="category_description"
                value={formData.category_description}
                onChange={handleInputChange}
                type="text"
                placeholder="Give Description"
                className="pl-3 file-input w-100"
              />
            </div>
          </div>
          <div className="mt-9 justify-between flex">
            <button className="btn w-30 btn-primary" onClick={AddData}>Save</button>
          
          </div>
          {responseMessage && (
          <div className="alert alert-info mt-7">{responseMessage}</div>
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
