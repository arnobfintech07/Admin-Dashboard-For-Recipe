import React from "react";

const Table = ({entry}) => {
  const title = ["id", "image", "category"];


  return (<>
    
    {/* // daisy ui normal table */}

    <div className="w-full overflow-x-auto">
      <table className="table ">
        <thead className="">
          <th>ID</th>
          <th>Recipe Name</th>
          <th>Image</th>
          <th>Review Count</th>
        </thead>
        <tbody>
          {entry.map((value, index)=>(
          <tr key={index}>
            <td>{value.id}</td>
            <td>{value.category}</td>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
              <img src={value.image} alt={value.image}/>
                </div>
              </div>
              </td>
            <td>{value.count}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  );
};

export default Table;
