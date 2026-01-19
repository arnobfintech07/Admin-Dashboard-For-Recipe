import axios from "axios";
import { useState, useEffect } from "react";
import CategoryAddModal from "../Components/CategoryAddModal";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import { baseURL } from "../utils/ configs";
import ModalWrapper3 from "../Components/ModalWrapper3";
import Test2 from "../Components/Test2";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data2 = await axios.get(`${baseURL}api/categories`);
        setCategories(data2.data.categories);
      } catch {
        console.log(e);
      }
    };
    getCategories();
  }, []);

  // const data = [
  //   {
  //     image:
  //       "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
  //     category: "Non-Veg",
  //     description: "Pizza is a ",
  //     action: "",
  //   },
  //   {
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPkm3Hhfm2fa7zZFgK0HQrD8yvwSBmnm_Gw&s",
  //     category: "Veg",
  //     count: "50",
  //     action: "",
  //   },
  // ];

  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-row">
          <SideBar />
         <div>
           <div className="   mt-6 pl-5 text-2xl">
            <div>
              <h2>Categories</h2>
            </div>
            <button
              className="btn mt-6 mb-9"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Add Category
            </button>
            
            <ModalWrapper3>
              <CategoryAddModal />
            </ModalWrapper3>
          </div>
          <div className="pl-6">
            <Test2 data2={categories} />
          </div>
         </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Categories;
