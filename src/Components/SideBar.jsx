import { Link } from "react-router-dom";
function SideBar() {
  return (
    
   

    <div className=" text-45xl pb-40">
      <ul className=" menu pb-140 w-50 h-250 bg-base-200 text-xl  ">
      <li>
        <Link to = "/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to = "/recipes">Recipes</Link>
      </li>
    
        <li>
        <Link to="/categories">Categories</Link>
      </li>
      
      
      <li>
        <Link to="/settings">Settings</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
       <li>
        <a>Sign Out</a>
      </li>
    </ul>
      </div>
  

  );
}
export default SideBar;
