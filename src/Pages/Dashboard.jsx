import { useEffect, useState } from "react";
import Card2 from "../Components/Card2";
import CardModal from "../Components/CardModal";
import Navbar from "../Components/Navbar";

import SideBar from "../Components/SideBar";
import axios from "axios";
import Pie from "../Components/Pie";
import Table from "../Components/Table";
function Dashboard() {
  const [cardNumber, setCardNumber] = useState([3, 2, 1]);
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
      <div className="w-full">
        <Navbar />
        <div className="w-full flex flex-col lg:flex-row">
          {/* side bar */}
          <SideBar />

          {/* content / dashboard viewport */}
          <div className="w-full px-5 flex flex-col gap-5">
            {/* card section */}
            <div className="w-full flex flex-col lg:flex-row gap-7 ">
              {cardNumber.map((count, index) => (
                <Card2 key={index} cardValue={cardValue} />
              ))}
            </div>

            {/* table */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 ">
              {/* table 1 */}
              <div className="col-span-1">
                <h1>Table 1</h1>
                <Table entry={entryData} />
              </div>
              <div className="col-span-1">
                <h1>Table 2</h1>
                <Table entry={entryData2} />
              </div>
              <div>
                <h1>Table 3</h1>
                <Table entry={entryData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
