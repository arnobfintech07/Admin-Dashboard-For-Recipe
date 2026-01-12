import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";

const VegFood = () => {

   
  return (
     <>
      <div>
        <div className="sticky top-0 left-0 z-50">
          <Navbar />
          <div className="flex justify-center bg-red-100"></div>
        </div>
        <div className="flex flex-row">
          <SideBar />
          <div className="m-5 text-3xl  flex-1 h-15 shadow  ">
            <h2 className=" mt-1 pl-4">Veg Recipe</h2>
         <button className="btn mt-13">Add Veg-Food</button>
          </div>
        
        </div>
        
      </div>
    </>
  )
}

export default VegFood
