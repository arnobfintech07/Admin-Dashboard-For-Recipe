<div className="bg-gray-100">
  {/* grid table */}
  <div className="grid grid-rows-6 justify-between grid-cols-1">
    {/* head */}
    <div
      className="bg-gray-700 col-span-1 row-span-1 grid grid-cols-3"
      id="head"
    >
      {title.map((value, key) => (
        <span className="w-full p-3 flex justify-center items-center" key={key}>
          {value}
        </span>
      ))}
    </div>

    {/* body */}
    <div
      className="bg-gray-300 text-black col-span-1 row-span-5 overflow-y-scroll "
      id="body"
    >
      {entry.map((value, key) => (
        <div className="grid grid-cols-3" key={key}>
          <span className="w-full p-3 flex justify-center items-center">
            {value.id}
          </span>
          <span className="w-full p-3 flex justify-center items-center">
            <img
              className="w-40 object-cover"
              src={value.image}
              alt={value.image}
            />
          </span>
          <span className="w-full p-3 flex justify-center items-center">
            {value.category}
          </span>
          {/* <span className="w-full p-3 flex flex-col lg:flex-row gap-2 justify-center items-center">
                <button className="btn btn-success">view</button>
                <button className="btn btn-warning">edit</button>
                <button className="btn btn-danger">Delete</button>
              </span> */}
        </div>
      ))}
    </div>
  </div>
</div>;
