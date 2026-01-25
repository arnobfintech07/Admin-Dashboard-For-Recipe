import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Table from "../Components/Table"
import Card2 from "../Components/Card2"

function Dashboard() {
  const [recipes, setRecipes] = useState([]); // State for API data
  const [loading, setLoading] = useState(true);

  // Replace with your actual API endpoint
  const url = "http://192.168.0.249:8000/api/recipes"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        // Based on your JSON structure: res.data.recipes
        setRecipes(res.data.recipes);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);



  return (
    <>
      <div className="">
        <Navbar />
        <div className="flex flex-row gap-4 lg:flex-row">
          <SideBar />
          <div className="flex flex-col w-full lg:pl-22 lg:w-420 gap-5">
            <div className="w-full flex flex-row m-4 lg:mt-10 lg:justify-between gap-8 ">
              <Card2 />
            </div>

            <div className="w-full flex flex-row lg:flex-row gap-4 lg:gap-10 mt-10 ">
              {/* DYNAMIC SECTION: All Recipes */}
              <div className="col-span-1 w-50 lg:w-full">
                <h1 className="text-2xl font-bold">All Recipes</h1>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <Table entry={recipes} />
                )}
              </div>              
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
