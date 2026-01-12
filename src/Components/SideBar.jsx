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
        <Link to = "/recipes">Recipies</Link>
      </li>
    
        <li>
        <details>
          <summary>By Category</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><Link to= "/veg">Veg</Link></li>
            <li><Link to="/nonveg">Non-Veg</Link></li>
          </ul>
        </details>
      </li>
      
      
      <li>
        <Link to="/settings">Settings</Link>
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
