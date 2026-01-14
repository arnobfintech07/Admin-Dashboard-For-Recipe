import CardModal from "../Components/CardModal";

import Navbar from "../Components/Navbar";

import SideBar from "../Components/SideBar";
function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="m-4 flex h-4">
          <h1 className=" text-3xl rounded shadow">DashBoard</h1>
         <div className="flex  gap-26 ">
          <div className="mt-30 ">
            <div className="bg-base-300 pl-4  h-10 rounded ">
              <h1 className=" text-2xl">Popular</h1>
            </div>
            <table className="table">
                  {/* head */}
                  <div>
                    <thead>
                    <tr>
                      <th>Image</th>
                      <th>Recipe Name</th>
                    <div className="pl-9">  <th>Views</th></div>
                      
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
                            <div className="font-bold w-35">Basic Homemade Wholemeal Bread</div>
                        
                          </div>
                          <td>1228</td>
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
                          <td>2240</td>
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
                          <td>3000</td>
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
                            <div className="font-bold w-35">Banana Blueberry Cake</div>
                        
                          </div>
                          <td>3200</td>
                        </div>
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
            <div className="">
              
              <div>
                
              </div>
            </div>
          </div>
          <div className="mt-30 ">
            <div className="bg-base-300 pl-4  h-10 rounded ">
              <h1 className=" text-2xl">All Recipe</h1>
            </div>
            <table className="table">
                  {/* head */}
                  <div>
                    <thead>
                    <tr>
                      <th>Image</th>
                      <th>Recipe Name</th>
                    <div className="pl-6">  <th>Category</th></div>
                      
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
                            <div className="font-bold w-35">Basic Homemade Wholemeal Bread</div>
                        
                          </div>
                          <td>Veg</td>
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
                          <td>FastFood</td>
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
                          <td>Non-Veg</td>
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
                            <div className="font-bold w-35">Banana Blueberry Cake</div>
                        
                          </div>
                          <td>Veg</td>
                        </div>
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
            <div className="">
              
              <div>
                
              </div>
            </div>
          </div>

          <div className="mt-30 ">
            <div className="bg-base-300 pl-4  h-10 rounded ">
              <h1 className=" text-2xl">Reviews</h1>
            </div>
            <table className="table">
                  {/* head */}
                  <div>
                    <thead>
                    <tr>
                      <th>Image</th>
                      <th>Recipe Name</th>
                    <div className="pl-6">  <th>Total Review</th></div>
                      
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
                            <div className="font-bold w-35">Basic Homemade Wholemeal Bread</div>
                        
                          </div>
                          <td>6530</td>
                  data      </div>
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
                          <td>4998</td>
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
                          <td>2300</td>
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
                            <div className="font-bold w-35">Banana Blueberry Cake</div>
                        
                          </div>
                          <td>3660</td>
                        </div>
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
            
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
