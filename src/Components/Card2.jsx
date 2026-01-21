import { PiCookingPotFill } from "react-icons/pi";
import { GiCook } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import Table from "./Table";
import { useEffect, useState } from "react";

const Card2 = () => {
  // Initialize with 0 or empty to prevent "undefined" errors
  const [stats, setStats] = useState({
    recipeCount: 0,
    categoryCount: 0,
    commentsCount: 0,
  });
   useEffect(() => {
    fetch("http://192.168.0.249:8000/api/dashboard")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  

  return (
    <>
      <div className="bg-base-300 h-50 w-50 lg:w-120 rounded-3xl p-6 flex flex-col gap-4">
        <div className="flex flex-row ">
          <span className="text-xl lg:2xl font-bold">Total Receipes</span>
          <span className="p-2">
       <div>
         <GiCook />
       </div>
          </span>
          
        </div>
        <div>
          <span className="text-xl lg:text-6xl">{stats.recipeCount}</span>
        </div>
      </div>
      <div className="bg-base-300 w-50 lg:w-120 rounded-3xl p-6 flex flex-col gap-4">
        <div className="flex flex-row ">
          <span className="text-xl lg:2xl font-bold">Total Categories</span>
          <span className="p-2">
       <div>
       <MdOutlineCategory />
       </div>
          </span>
        </div>
        <div>
          <span className="text-xl lg:text-6xl"> {stats.categoryCount}</span>
        </div>
      </div>
      <div className="bg-base-300 w-50 lg:w-120 rounded-3xl p-6 flex flex-col gap-4">
        <div className="flex flex-row ">
          <span className="text-xl lg:2xl font-bold">Total Reviews</span>
          <span className="p-2">
       <div>
     <MdReviews />
       </div>
          </span>
        </div>
        <div>
          <span className="text-xl lg:text-6xl"> {stats.commentsCount}</span>
        </div>
      </div>

      
    </>
  );
};

export default Card2;
