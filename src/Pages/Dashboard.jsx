import { useEffect, useState } from "react";
import Card2 from "../Components/Card2";
import CardModal from "../Components/CardModal";
import Navbar from "../Components/Navbar";

import SideBar from "../Components/SideBar";
import axios from "axios";
import Pie from "../Components/Pie";
function Dashboard() {
  const [cardNumber, setCardNumber] = useState([3, 2, 1]);
  const [cardValue, setCardValue] = useState(100);
  const [data, setData] = useState();

  const url = "https://hello.com";

  // useEffect(async (url) => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data)
  //     })
  //     .catch((err)=>console.log(err));
  // }, [url]);

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="w-full flex flex-col lg:flex-row">
          {/* side bar */}
          <SideBar />
          {/* content / dashboard viewport */}
          <div>
            <div className="flex flex-col h-80 lg:flex-row gap-7  ">
              {cardNumber.map((count, index) => (
                <Card2 key={index} cardValue={cardValue} />
              ))}
            </div>
              <div className="flex flex-row gap-20">
                <div className="card mt-20 bg-base-100 w-90 h-140 border rounded-4xl  shadow-sm">
                <div className="card-body  ">
                  <h2 className="card-title shadow-2xl bg-base-200 h-15 rounded-2xl pl-4 text-2xl">
                    Statistics
                  </h2>
                  <div className="">
                    <table className="table mt-5 ">
                      {/* head */}
                      <div></div>
                      <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                          <th>1</th>
                          <td>Total Recipes</td>

                          <td>50</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="bg-base-200">
                          <th>2</th>
                          <td>Total Categories</td>

                          <td>8</td>
                        </tr>
                        <tr className="bg-base-200">
                          <th>3</th>
                          <td>Total Reviews</td>
                          <td>30</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-5 pl-4">
                      {" "}
                      <Pie />
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="card mt-20 bg-base-100 w-90 h-140 border rounded-4xl  shadow-sm ">
                    <div className="   h-10 rounde-3xl  mt-5  ">
                       <h2 className="card-title shadow-2xl bg-base-200 h-15 rounded-2xl pl-4 text-2xl">
                    All Recipies
                  </h2>
                    </div>
                    <table className="table mt-4">
                      {/* head */}
                      <div>
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Recipe Name</th>
                            <div className="pl-6"></div>
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
                                <div className="font-bold w-35">
                                  Fresh Muscles
                                </div>
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
                                <div className="font-bold w-35">
                                  Avocado Egg
                                </div>
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
          </div>
        </div>
      
    </>
  );
}
export default Dashboard;
