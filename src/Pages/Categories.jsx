import axios from "axios";
import { useState, useEffect } from "react";
import CategoryAddModal from "../Components/CategoryAddModal";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import { baseURL } from "../utils/ configs";
import ModalWrapper3 from "../Components/ModalWrapper3";
import ModalWrapper4 from "../Components/ModalWrapper4";
import CategoryEditModal from "../Components/CategoryEditModal";
import Test2 from "../Components/Test2";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(0);

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

  const deleteCategory = async (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`${baseURL}api/categories/${categoryId}/delete`);

        setRecipes(categories.filter((category) => category.id !== categoryId));
        alert("Category deleted successfully");
      } catch (error) {
        console.error("Error deleting category:", error);
        alert("Success to delete category");
      }
    }
  };

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
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Add Category
              </button>
              <ModalWrapper4 id={id}>
                <CategoryEditModal id={id} />
              </ModalWrapper4>
              <ModalWrapper3>
                <CategoryAddModal />
              </ModalWrapper3>
            </div>
            <div className="pl-6">
              <Test2 data2={categories} setId={setId} deleteCategory={deleteCategory} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Categories;
