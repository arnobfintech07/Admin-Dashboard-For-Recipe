import React from 'react'

const FavoritedModal = () => {
  return (
    <div className="pl-7 overflow-x-auto h-96 w-96 mt-7 flex-col bg-base-100">
  <table className="table table-xs table-pin-rows">
    <thead>
      <tr>
        <th></th>
        <td className='text-xl bg-base-100'>Recipe</td>
        <td className='pl-30 text-xl align-baseline bg-base-100'>Favorites</td>
      </tr>
    </thead>
    
    <tbody className='bg-base-100'>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td className='pl-32 '>9797</td>
        
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td className='pl-32'>4890</td>
        
      </tr>
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td className='pl-32'>6580</td>
      </tr>

      <tr>
        <th>4</th>
        <td>Brice Swyre</td>
        <td className='pl-32'>6980</td>
      </tr>
     
    </tbody>
   
  </table>
</div>
  )
}

export default FavoritedModal
