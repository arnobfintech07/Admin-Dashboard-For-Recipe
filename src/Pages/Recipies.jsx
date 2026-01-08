import React from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Card from "./Card";
const Recipies = () => {
  return (
    <>
      <div>
        <div className="sticky top-0 left-0 z-50">
          <Navbar />
          <div className="flex justify-center bg-red-100"></div>
        </div>
        <div className="flex flex-row">
          <SideBar />
          <div className="m-5 flex-1  h-4">
            <h1 className=" text-3xl rounded shadow">Recipes</h1>
            <div className="flex ">
            <Card/>
            <Card/>
            <Card/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipies;
