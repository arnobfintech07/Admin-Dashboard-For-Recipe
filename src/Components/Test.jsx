import React from "react";
import { baseURL } from "../utils/ configs";
const Test = ({ data, setId, deleteRecipe }) => {
  console.log(data);
 
  return (
    <div className=" w-full ">
      <table className="table">
        <thead>
          <th>Image</th>
          <th>Recipe name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Difficulty</th>
          <th>Cook-Time</th>
          <th>Action</th>
        </thead>
        <tbody className="">
          {data.map((value, index) => (
            <tr className="" key={index}>
              <td className="">
                <img
                  src={value.recipe_image}
                  alt={value.recipe_image}
                  className="w-30 h-30"
                />
                {value.image}
              </td>
              <td>{value.name}</td>
              <td className="">
                <p className="text-ellipsis line-clamp-1 w-45">
                  {value.description}
                </p>
              </td>
              <td>{value.category}</td>
              <td>{value.difficulty}</td>
              <td>{value.cook_time}</td>
              <td className="flex gap-3">
                <button
                  className="btn btn-warning mt-20"
                  onClick={() => {
                    setId(value?.id);
                    document.getElementById("my_modal_3").showModal();
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-error mt-20"
                  onClick={() => deleteRecipe(value.id)} 
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
