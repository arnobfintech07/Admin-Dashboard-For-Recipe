import React from 'react'

const RecipeModal = () => {
  return (
  <>
  <div className="card bg-base-100 w-96 shadow-sm m-57 h-200 ">
  <div className='min-h-0'>
    <figure>
    <h1 className="bg-amber-200 text-2xl rounded shadow w-full pl-5 p-3 min-h-0">Edit Recipe</h1>
  </figure>
  <div>
    <p className='pl-5 mt-6 font-bold pb-2'>Recipe Name</p>
  </div>
  <div className='pl-5'>
    <input type="text" placeholder="eg: Chicken Soup" className="input " />
  </div>
  <div className="card bg-base-100 w-80 shadow-sm h-40 m-5  ">
  <h2 className='bg-base-200 pl-5 p-3 rounded'>Media</h2>
  <div>
    <h1 className='p-4'>Recipe Images</h1>
  </div>
  
</div>
  </div>
</div>

  </>
  )
}

export default RecipeModal
