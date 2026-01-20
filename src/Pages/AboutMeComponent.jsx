import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";


const AboutMeComponent = () => {
  const [about, setAbout] = useState("");
  const [id, setId] = useState(null);
  const baseURL = "http://192.168.0.249:8000/";
const [responseMessage, setResponseMessage] = useState("");
  useEffect(() => {
    const getAbout = async () => {
      try {
        const response = await axios.get(`${baseURL}api/about_me`);

        if (response.data.shape && response.data.shape.length > 0) {
          const item = response.data.shape[0];
          setAbout(item.about_me);
          setId(item.id);
          console.log("Successfully loaded ID:", item.id);
        } else {
          console.warn("API returned success, but 'shape' array is empty.");
        }
      } catch (e) {
        console.error(
          "Fetch failed. Check if server is running at",
          baseURL,
          e,
        );
      }
    };
    getAbout();
  }, []);

  const handleUpdate = async () => {
    if (!id) {
      alert("Cannot update: No record ID found in state.");
      return;
    }

    try {
      const response = await axios.post(`${baseURL}api/about_me/${id}/edit`, {
        about_me: about,
        _method: "PUT",
      });

     setResponseMessage("Recipe saved successfully!");
      console.log("Server Response:", response.data);
    } catch (e) {
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
      <div className="w-full">
        <Navbar />

        <div className="flex flex-row gap-10">
          <div>
            <SideBar />
          </div>

          <div className= "mt-5">
            <h1 className=" text-3xl rounded shadow pl-4">Edit About </h1>

            {id ? (
              <div>
                <textarea
                  type="text"
                  className="border w-400 h-100 pl-2 rounded-2xl mt-10 "
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
                <br />
                <button
                  onClick={handleUpdate}
                 className= "border mt-3 h-10 w-30 bg-base-300 rounded-xl hover: cursor-alias "
                >
                  Update About
                </button>
              </div>
            ) : (
              <p >
            
              </p>
            )}
             {responseMessage && (
          <div className="alert alert-info mx-5 mt-2">{responseMessage}</div>
        )}
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default AboutMeComponent;
