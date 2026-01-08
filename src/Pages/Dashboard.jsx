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
          <div className="card bg-base-100 h-100 w-96 shadow-sm m-5">
            <div className="bg-amber-200">
                  <h1 className=" text-xl rounded shadow">Top Viewed</h1>
            
            </div>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
