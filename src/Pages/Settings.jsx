import { IoMdAddCircleOutline } from "react-icons/io";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Settings = () => {
  const data = [
    { id: 1, site_key: "Site name", value: "Chef's" },
    { id: 2, site_key: "logo", value: "/logo.jpg" },
  ];

  const [newInput, setNewInput] = useState({
    site_value: "",
    site_key: "",
  });

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(newInput);
  };

  const handleChangeInput = (e) => {
    setNewInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row gap-5">
        <SideBar />

        {/* container section */}
        <div className="w-full flex flex-col gap-20">
          {/* title and create section */}
          <div className="w-full bg-blue-100 rounded-xl flex flex-row justify-between p-3">
            <h1 className="text-3xl font-bold text-base-100">Site Settings</h1>
            <div className="form">
              <form className="flex flex-col lg:flex-row gap-3" onSubmit={handleCreate}>
                <input
                  className="input"
                  type="text"
                  name="site_key"
                  value={newInput.site_key}
                  onChange={handleChangeInput}
                  placeholder="value"
                />
                <input
                  className="input"
                  type="text"
                  name="site_value"
                  value={newInput.site_value}
                  onChange={handleChangeInput}
                  placeholder="site key"
                />

                <span className="btn btn-primary flex flex-row">
                  <input type="submit" value={"Add Fields"} />
                  <IoMdAddCircleOutline className="text-xl" />
                </span>
              </form>
            </div>
          </div>

          {/* table view section */}
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Site key</th>
                  <th>Value</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.site_key}</td>
                    <td>{value.value}</td>
                    <td className="flex flex-col lg:flex-row gap-2">
                      <button className="btn btn-warning">Edit</button>
                      <button className="btn btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
