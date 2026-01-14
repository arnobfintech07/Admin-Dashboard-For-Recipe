import { useEffect, useState } from "react";
import Card2 from "../Components/Card2";
import CardModal from "../Components/CardModal";

import Navbar from "../Components/Navbar";

import SideBar from "../Components/SideBar";
import axios from "axios";
function Dashboard() {
  const [cardNumber, setCardNumber] = useState([3, 2, 1]);
  const [cardValue, setCardValue] = useState(100);
  const [data, setData] = useState();

  const url='https://hello.com';

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
    <div className="w-full">
      <Navbar />
      <div className="w-full flex flex-col lg:flex-row">
        {/* side bar */}
        <SideBar />
        {/* content / dashboard viewport */}
        <div className="w-full p-5">
          <div className="flex flex-col lg:flex-row justify-between gap-5 ">
            {cardNumber.map((count, index) => (
              <Card2 key={index} cardValue={cardValue} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
