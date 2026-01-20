import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";

import { baseURL } from "../utils/ configs";

const About = () => {
  const abouts = {
    about_me: "",
  };

  const [about, setAbout] = useState();

  const navigate = useNavigate();
  const { id } = useParams();
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const getAbout = async () => {
      try {
        const data3 = await axios.get(`${baseURL}api/about_me`);
        setAbout(data3.data.shape);
      } catch {
        console.log(e);
      }
    };
    getAbout();
  }, []);

  const [aboutText, setAboutText] = useState("I am a fresher shape");

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${baseURL}api/about_me/2/edit`, {
        about_me: aboutText,
      });
      console.log("Success:", response.data);
      alert("Updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Error updating data");
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
              {about?.map((item) => (
                <textarea className="border h-30 w-100" key={item.id}>
                  {item.about_me}
                </textarea>
              ))}

            </div>
            <div className="mt-4">
              <button className="btn">Submit</button>
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
