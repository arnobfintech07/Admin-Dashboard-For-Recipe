import React from "react";

const Test2 = ({data2}) => {
  return (
    <div className=" border lg:w-400">
      <table className="table">
        <thead>
          <th>category_name</th>
          <th>category_image</th>
          <th>category_description</th>
          <th>Action</th>
        </thead>
        <tbody className="">
          {data2.map((value, index) => (
            <tr className="" key={index}>
              <td>{value.category_name}</td>

              <td className="">
                <img
                  src={value.category_image}
                  alt={value.category_image}
                  className="w-30"
                />
              </td>
              <td className="">
                <p className="text-ellipsis line-clamp-1 w-45">
                  {value.category_description}
                </p>
              </td>
              <td className="flex gap-3">
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Edit
                </button>

                <button className="btn btn-error">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test2;
