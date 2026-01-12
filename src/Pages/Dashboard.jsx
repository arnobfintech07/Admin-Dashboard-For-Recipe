import CardModal from "../Components/CardModal";
import FavoritedModal from "../Components/FavoritedModal";
import Navbar from "../Components/Navbar";
import SharedModal from "../Components/SharedModal";
import SideBar from "../Components/SideBar";
function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <SideBar />
        <div className="m-5 flex-1  h-4">
          <h1 className=" text-3xl rounded shadow">DashBoard</h1>
          <div className="flex mt-10">
            <div className="card bg-base-100 h-150 w-110 shadow-sm m-5">
              <div className="bg-amber-200 pl-4 h-10 ">
                <h1 className=" text-2xl  ">Popular</h1>
              </div>
              <div>
                <CardModal />
              </div>
            </div>

            <div className="card bg-base-100 h-150 w-110 shadow-sm m-5">
              <div className="bg-amber-200 pl-4 h-10 ">
                <h1 className=" text-2xl  ">Top Shared</h1>
              </div>
              <div>
                <SharedModal />
              </div>
            </div>

            <div className="card bg-base-100 h-150 w-110 shadow-sm m-5">
              <div className="bg-amber-200 pl-4 h-10 ">
                <h1 className=" text-2xl  ">Top Favorited</h1>
              </div>
              <div>
                <FavoritedModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
