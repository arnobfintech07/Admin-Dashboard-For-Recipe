import React from "react";

const Table = ({ entry }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Recipe Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {entry.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
       
              <td>{value.name || value.category}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                 
                    <img 
                      src={value.recipe_image || value.image} 
                      alt={value.name || "recipe"} 
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
