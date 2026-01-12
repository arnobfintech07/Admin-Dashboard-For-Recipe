import CardModal from "../Components/CardModal";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <SideBar />
        <div className="m-5 flex-1  h-4">
          <h1 className=" text-3xl rounded shadow">DashBoard</h1>
          <div className="card bg-base-100 h-150 w-110 shadow-sm m-5">
            <div className="bg-amber-200 pl-4 h-10 ">
                  <h1 className=" text-2xl  ">Popular</h1>
            
            </div>
            <div>
              <CardModal/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
