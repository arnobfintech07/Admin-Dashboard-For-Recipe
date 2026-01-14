import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 navbar bg-base-100 shadow">
      <div className="flex pr-100 text-left">
        <a className="btn btn-ghost text-xl">Admin Dashboard</a>
      </div>
      <div className="flex mt-6 gap-5">
       
        <div className="  rounded-2xl bg-base-300 ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
