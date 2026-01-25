import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import SideBar from '../Components/SideBar';
import Table2 from '../Components/Table2';


const Review = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch data from your API URL
    fetch("http://192.168.0.249:8000/api/comments")
      .then((res) => res.json())
      .then((data) => {
        // Based on your JSON, the data is inside a "comments" array
        if (data.success) {
          setComments(data.comments);
        }
      })
      .catch((err) => console.error("Error fetching comments:", err));
  }, []);

  return (
    <>
      <div className="sticky top-0 left-0 z-50">
        <Navbar />
      </div>
      <div className="flex flex-row">
        <SideBar />
        <div className="m-5 flex-1">
          <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
          {/* Pass the fetched comments to Table2 as a prop */}
          <Table2 entry={comments} />
        </div>
      </div>
    </>
  );
};

export default Review;

