import { Link } from "react-router-dom"

function Navbar(){
return(
    <div className="sticky top-0 z-50 navbar bg-base-100 shadow">
  <div className="flex pr-100 text-left">
    <a className="btn btn-ghost text-xl">Admin Dashboard</a>
  </div>
 <div className="flex mt-6 gap-5">
    <div className="mt-2 rounded-xl bg-base-300 pr-6 pl-5">
        <details>
          <summary>By Category</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><Link to= "/veg">Veg</Link></li>
            <li><Link to="/nonveg">Non-Veg</Link></li>
          </ul>
        </details>
    
  </div>
 
  <div className="  rounded-2xl bg-base-300 ">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
  </div>
 </div>
  
  
</div>
)
}
export default Navbar