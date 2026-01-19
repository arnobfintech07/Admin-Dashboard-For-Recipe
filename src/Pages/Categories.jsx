import CategoryAddModal from "../Components/CategoryAddModal";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import ModalWrapper3 from "../Components/ModalWrapper3";
const Categories = () => {
  const data = [
    {
      image:
        "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
      category: "Non-Veg",
      description: "Pizza is a ",
      action: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPkm3Hhfm2fa7zZFgK0HQrD8yvwSBmnm_Gw&s",
      category: "Veg",
      count: "50",
      action: "",
    },
  ];

  return (
    <>
    <div>
      <Navbar />
      <div className="flex flex-row">
        <SideBar />
        <div className="   mt-13 pl-5 text-2xl">
          <div>
          
            <h2>Categories</h2>
          </div>
        <button className="btn mt-6 mb-9" onClick={()=>document.getElementById('my_modal_2').showModal()}>Add Category</button>
          <div className="border">
            <table className="table">
              <thead>
                <th>Image</th>
                <th>Category</th>
               <th>Description</th>
                <th>Action</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={data[0].image} alt="" className="w-20 "/>
                  </td>
                  <td>{data[0].category}</td>
                  <td>{data[0].description}</td>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-error">Delete</button>
                </tr>
                <tr>
                  <td>
                    <img src={data[0].image} alt="" className="w-20" />
                  </td>
                  <td>{data[0].category}</td>
                  <td>{data[0].description}</td>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-error">Delete</button>
                </tr>
              </tbody>
            </table>
          </div>
          <ModalWrapper3>
            <CategoryAddModal/>
          </ModalWrapper3>
        </div>
      </div>
    </div>
     <div>
            </div>
    </>
  );
};

export default Categories;
