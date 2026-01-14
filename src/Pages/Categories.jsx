import CardModal from "../Components/CardModal";
import FavoritedModal from "../Components/FavoritedModal";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
const Categories = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <SideBar />
        <div className="font-bold mt-13 pl-5 text-2xl">
          <h2>Categories</h2>
        </div>
        <div className="mt-30 ">
          <div className="bg-base-300 pl-4  h-10 rounded ">
            <h1 className=" text-2xl">Veg Food</h1>
          </div>
          <table className="table">
            {/* head */}
            <div>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Recipe Name</th>
                  <div className="pl-6">
                 
                  </div>
                </tr>
              </thead>
            </div>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex ">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://recipeapp.neurondigital.com/uploads/1537472654recipe_0000_vitchakorn-koonyosying-494170-unsplash.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="pl-6">
                      <div className="font-bold w-35">
                        Basic Homemade Wholemeal Bread
                      </div>
                    </div>
                   
                   
                  </div>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <div className="flex ">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://recipeapp.neurondigital.com/uploads/1537471968recipe_0010_joseph-gonzalez-176749-unsplash.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="pl-6">
                      <div className="font-bold w-35">Fresh Muscles</div>
                    </div>
                    
                  </div>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>
                  <div className="flex ">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://recipeapp.neurondigital.com/uploads/1537472654recipe_0000_vitchakorn-koonyosying-494170-unsplash.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="pl-6">
                      <div className="font-bold w-35">Avocado Egg</div>
                    </div>
                    
                  </div>
                </td>
              </tr>
              {/* row 4 */}
              <tr>
                <td>
                  <div className="flex ">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://recipeapp.neurondigital.com/uploads/1537473001recipe_0003_rustic-vegan-756637-unsplash.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="pl-6">
                      <div className="font-bold w-35">
                        Banana Blueberry Cake
                      </div>
                    </div>
                    
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categories;
