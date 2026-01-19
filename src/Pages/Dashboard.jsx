import { useEffect, useState } from "react";
import Card2 from "../Components/Card2";
import CardModal from "../Components/CardModal";
import Navbar from "../Components/Navbar";

import SideBar from "../Components/SideBar";
import axios from "axios";
import Pie from "../Components/Pie";
import Table from "../Components/Table";
function Dashboard() {
  // const [cardNumber, setCardNumber] = useState([3, 2, 1]);
  const [cardValue, setCardValue] = useState(100);
  const [data, setData] = useState();

  const entryData = [
    {
      id: "1",
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

  const entryData2 = [
    {
      id: "1",
      image: "/images/food01.jpg",
      category: "veg",
      action: "button",
      count: 521,
    },
    {
      id: "2",
      image:
        "https://media.istockphoto.com/id/848013144/photo/minimal-strawberry.webp?b=1&s=612x612&w=0&k=20&c=f8SLSrGK-XxbmxKAjfux3IIGYLXwPJ00MciKfLOTBfw=",
      category: "veg",
      action: "button",
      count: 46546,
    },
  ];
  

  const url = "https://hello.com";

  // useEffect(async (url) => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data)
  //     })
  //     .catch((err)=>console.log(err));
  // }, [url]);

  return (
    <>
      <div className="">
        <Navbar />
        <div className=" flex flex-row gap-4 lg:flex-row">
          {/* side bar */}
          <SideBar />
          <div className=" flex flex-col  w-full  lg:pl-22  lg:w-420  gap-5">
            {/* card section */}
            <div className="w-full   flex flex-row m-4 lg:mt-10 lg:flex-row   lg:;justify-between gap-8 ">
              {/* {cardNumber.map((count, index) => (
                <Card2 key={index} cardValue={cardValue} />
                
                
              ))} */}
              <Card2/>
              
            </div>

            {/* table */}
            <div className="w-full flex flex-row lg:flex-row  gap-4 lg:gap-10 ">
              {/* table 1 */}
              <div className="col-span-1 w-50 lg:w-120">
                <h1>  All Recipies</h1>
                <Table entry={entryData} />
              </div>
              <div className="col-span-1 w-60 lg:w-120">
                <h1>All Categories</h1>
                <Table entry={entryData2} />
              </div>
              <div className="col-span-1 w-60 lg:w-120">
                <h1>All Reviews</h1>
                <Table entry={entryData} />
              </div>
            </div>
          </div>
          </div>

          {/* content / dashboard viewport */}
         
       
      </div>
    </>
  );
}
export default Dashboard;
