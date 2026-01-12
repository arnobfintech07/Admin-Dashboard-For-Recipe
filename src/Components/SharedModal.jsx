import React from 'react'

const SharedModal = () => {
  return (
    <div className="pl-7 overflow-x-auto h-96 w-96 mt-7 flex-col">
  <table className="table table-xs table-pin-rows">
    <thead>
      <tr>
        <th></th>
        <td className='text-xl'>Recipe</td>
        <td className='pl-30 text-xl'>Shares</td>
      </tr>
    </thead>
    
    <tbody>
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

export default SharedModal
