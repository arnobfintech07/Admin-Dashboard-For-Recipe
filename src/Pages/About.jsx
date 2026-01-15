import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import {baseURL} from "../utils/ configs"
const About = () => {
  const [about, setAbout] = useState({
    about_me: "",
  })
   const [responseMessage, setResponseMessage] = useState("");

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAbout((prev) => ({ ...prev, [name]: value }));
  };
   const AddData = async () => {
    console.log("Posting data...");

    const dataToSend = {
      about_me: about.about_me
    }

    

    console.log(dataToSend);

    try {
      const response = await axios.post(`${baseURL}api/about_me`, dataToSend, {
      });
      setResponseMessage("Details Updated successfully!");
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
      <div className="w-full border">
        <Navbar />

        <div className="flex flex-row gap-10">
          <div>
            <SideBar />
          </div>

          <div>
            <div className="flex flex-col w-100 mt-6 h-15  rounded bg-base-200 text-2xl ">
              <h2 className="m-4">Edit Your Details</h2>
            </div>
            <div className="mt-9">
           <input 
           name= "about_me"
           value={about.about_me}

           
           onChange={handleInputChange}
           type="text" 
           placeholder="Type here" 
           className="input h-33 w-120" />
            </div>
            <div className="mt-4">
              <button className="btn" onClick={AddData}>Submit</button>
            </div>
            {responseMessage && (
          <div className="alert alert-info mx-5">{responseMessage}</div>
        )}
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
