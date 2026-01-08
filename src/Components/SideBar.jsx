import { Link } from "react-router-dom";
function SideBar() {
  return (
    
    <div>

    <div className=" text-45xl pb-40">
      <ul className=" menu pb-140 w-50 bg-base-200 text-xl  ">
      <li>
        <Link to = "/dashboard">Dashboard</Link>
      </li>
      <li>
        <a>Categories</a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <Link to = "/recipes">Recipies</Link>
      </li>
      <li>
        <a>Sign Out</a>
      </li>
    </ul>
      </div>
    
    </div>

  );
}
export default SideBar;
