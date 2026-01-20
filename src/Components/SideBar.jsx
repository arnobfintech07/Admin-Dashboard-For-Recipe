import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { GiCook } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
function SideBar() {
  return (
    
   

    <div className=" text-45xl pb-40">
      <ul className=" menu pb-140 w-50 h-250 bg-base-200 text-xl  ">
      <li>
        
        <Link to = "/dashboard"><MdSpaceDashboard />Dashboard</Link>
      </li>
      <li>
        <Link to = "/recipes"><GiCook />Recipes</Link>
      </li>
    
        <li>
        <Link to="/categories"><MdOutlineCategory />Categories</Link>
      </li>
      
      
      <li>
        <Link to="/settings"><IoSettingsSharp />Settings</Link>
      </li>
      {/* <li>
        <Link to="/about">About</Link>
      </li> */}
      <li>
        <Link to="/aboutme"><MdOutlineDescription />About Me</Link>
      </li>
       {/* <li>
        <a><PiSignOutBold />Sign Out</a>
      </li> */}
    </ul>
      </div>
  

  );
}
export default SideBar;
