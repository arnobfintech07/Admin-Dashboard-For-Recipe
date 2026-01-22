import React from "react";
import CategoryAddModal from "./CategoryAddModal";
import CategoryEditModal from "./CategoryEditModal";
import ModalWrapper4 from "./ModalWrapper4";
const Test2 = ({ data2, setId, deleteCategory }) => {
  return (
    <div className="  lg: w-400 pl-4">
      <table className="table">
        <thead>
          <th>Category Image</th>
          <th>Category Name</th>
          <th>Category Description</th>
          <th>Action</th>
        </thead>
        <tbody className="">
          {data2.map((value, index) => (
            <tr className="" key={index}>
              <td className="">
                <img
                  src={value.category_image}
                  alt={value.category_image}
                  className="w-30 h-30"
                />
              </td>
              <td>{value.category_name}</td>

              <td className="">
                <p className="text-ellipsis line-clamp-1 w-45">
                  {value.category_description}
                </p>
              </td>
              <td className="flex gap-3 mt-20">
                <button
                  className="btn btn-warning mt-20"
                  onClick={() => {
                    setId(value?.id);
                    document.getElementById("my_modal_6").showModal();
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-error mt-20"
                  onClick={() => deleteCategory(value.id)}
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

export default Test2;
