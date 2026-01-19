import React from "react";

const Table = () => {
  const title = ["id", "image", "category"];
  const entry = [
    {
      id: "3",
      image: "/images/food01.jpg",
      category: "fruit",
      action: "button",
      count: 521,
    },
    {
      id: "2",
      image:
        "https://media.istockphoto.com/id/848013144/photo/minimal-strawberry.webp?b=1&s=612x612&w=0&k=20&c=f8SLSrGK-XxbmxKAjfux3IIGYLXwPJ00MciKfLOTBfw=",
      category: "fruit",
      action: "button",
      count: 46546,
    },
  ];

  return (<>
    
    {/* // daisy ui normal table */}

    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Name</th>
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
