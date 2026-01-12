import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";

const Settings = () => {
  return (
    <>
      <div>
        <div className="sticky top-0 left-0 z-50">
          <Navbar />
          <div className="flex justify-center bg-red-100"></div>
        </div>
        <div className="flex flex-row">
          <SideBar />
         <div className="">
             <div className="m-5  text-3xl  flex-1 h-15 ">
            <h2 className=" mt-1 pl-4">Settings</h2>
            <fieldset className="fieldset rounded-box w-150 shadow-xl p-4 mt-20">
             <div className="text-2xl shadow rounded pl-4 h-10">Login Settings</div>

              <label className="label mt-4 font-bold text-xl">New Login</label>
              <input type="email" className="input w-full" placeholder="New Username" />

              <label className="label text-xl font-bold mt-5">New Password</label>
              <input type="password" className="input w-full" placeholder="New Password" />

              <label className="label text-xl font-bold mt-5">Confirm Password</label>
              <input type="password" className="input w-full" placeholder="Confirm Password" />
              <label className="label text-xl font-bold mt-5">Current Password</label>
              <input type="password" className="input w-full" placeholder="Password" />

              <button className="btn rounded-2xl bg-amber-200  mt-4">Update</button>
            </fieldset>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
