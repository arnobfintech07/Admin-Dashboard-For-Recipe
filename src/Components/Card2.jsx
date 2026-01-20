import { PiCookingPotFill } from "react-icons/pi";
import { GiCook } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import Table from "./Table";

const Card2 = ({cardValue}) => {
//   const cardValue = 500;

  return (
    <>
      <div className="bg-base-300 w-50 lg:w-120 rounded-3xl p-6 flex flex-col gap-4">
        <div className="flex flex-row ">
          <span className="text-xl lg:2xl font-bold">Total Receipes</span>
          <span className="p-2">
       <div>
         <GiCook />
       </div>
          </span>
          
        </div>
        <div>
          <span className="text-xl lg:text-6xl">100</span>
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
          <span className="text-xl lg:text-6xl">10</span>
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
          <span className="text-xl lg:text-6xl">50</span>
        </div>
      </div>

      
    </>
  );
};

export default Card2;
