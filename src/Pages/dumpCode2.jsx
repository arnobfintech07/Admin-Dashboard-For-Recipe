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
                <div className="font-bold w-35">Banana Blueberry Cake</div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
