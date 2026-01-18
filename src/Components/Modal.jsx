import React from 'react'

const Modal = () => {
  return (
    <div>
           <div className=" h-15  shadow pl-5  text-2xl font-bold">
                <h2>Edit Recipe</h2>
              </div>
              <div className="mt-8 pl-1 text-xl font-bold">Recipe Name</div>

              <div className="pl-4 h-10 w-110  rounded-xl mt-2">
                <input type="text" placeholder="Type here" className="input " />
              </div>
              <div className="pl-4 ">
                <div className="card bg-base-100 w-100 shadow-sm mt-10 ">
                  <div className="mt-5 pl-5 font-bold">
                    <h2>Recipe Images</h2>
                  </div>
                  <figure>
                    <img
                      src="https://recipeapp.neurondigital.com/uploads/1537472654recipe_0000_vitchakorn-koonyosying-494170-unsplash.jpg"
                      alt="Shoes"
                      className="w-44 rounded-2xl mt-5"
                    />
                  </figure>
                  <div className="card-body">
                    <input type="file" className=" file-input w-90" />
                  </div>
                </div>
              </div>
              <div className="pl-4 ">
                <div className="card bg-base-100 w-100 h-180 shadow-sm mt-10 ">
                  <div className="mt-5 pl-2 font-bold">
                    <h2>Recipe Directions</h2>
                  </div>
                  <div>
                    <div className="pl-4 mt-3 font-bold">
                      <h2>Prep. Time(min)</h2>
                    </div>
                    <div className="mt-4 pl-4">
                      <input
                        type="number"
                        placeholder="Type here"
                        className="input border rounded"
                      />
                    </div>
                    <div className="pl-4 mt-3 font-bold">
                      <h2>Cook Time(min)</h2>
                    </div>
                    <div className="mt-4 pl-4">
                      <input
                        type="number"
                        placeholder="Type here"
                        className="input border rounded"
                      />
                    </div>
                    <div className="pl-4 mt-3 font-bold">
                      <h2>Difficulty</h2>
                    </div>
                    <div className="mt-4 pl-4">
                      <select
                        name="difficulty"
                        defaultValue="Pick Difficulty"
                        className="select border rounded"
                      >
                        <option disabled={true}>Pick Difficulty</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                      </select>
                    </div>
                  </div>
                  <div className="font-bold pl-4 mt-4">
                    <h2>Directions</h2>
                  </div>
                  <div className="" >
                    <div className="card bg-base-100 w-100 shadow-sm  ">
                      <div className="mt-5 pl-5 font-bold">
                        <h2>Recipe Images</h2>
                      </div>
                      <figure>
                        <img
                          src="https://recipeapp.neurondigital.com/uploads/1537472654recipe_0000_vitchakorn-koonyosying-494170-unsplash.jpg"
                          alt="Shoes"
                          className="w-44 rounded-2xl mt-5"
                        />
                      </figure>
                      <div className="card-body">
                        <input type="file" className=" file-input w-90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Modal
