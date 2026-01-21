import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 navbar bg-base-100 shadow">
      <div className="flex pr-100 text-left">
        <Link to= "/dashboard" className="btn btn-ghost text-xl">Admin Dashboard</Link>
      </div>
      <div className="flex mt-6 gap-5">
       
        
      </div>
    </div>
  );
}
export default Navbar;
