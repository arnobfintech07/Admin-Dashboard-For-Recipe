import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Table2 from '../Components/Table2';


const Review = () => {
  const [comments, setComments] = useState([]);

  // Fetch all comments on component mount
  useEffect(() => {
    fetch("http://192.168.0.249:8000/api/comments")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setComments(data.comments);
        }
      })
      .catch((err) => console.error("Error fetching comments:", err));
  }, []);

  // Update logic sending all 3 required fields
  const handleSaveToDatabase = async (id, updatedData) => {
    try {
      const response = await fetch(`http://192.168.0.249:8000/api/comments/${id}/edit`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        },
        body: JSON.stringify(updatedData), // sends { message, status, reaction }
      });

      const result = await response.json();

      if (result.success) {
        alert("Success: Status updated to " + updatedData.status);
        // Sync the local state to show the new status
        setComments(prev => 
          prev.map(item => item.id === id ? { ...item, status: updatedData.status } : item)
        );
      } else {
        alert("Failed to update: " + (result.message || "Server Error"));
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  };

  return (
    <>
      <div>
        <div className="sticky top-0 left-0 z-50">
          <Navbar />
          <div className="flex justify-center bg-red-100"></div>
        </div>
        <div className="flex flex-row">
          <SideBar />
          <div className="m-5 flex-1">
            <h2 className="text-xl font-bold mb-4">Review Management</h2>
            <Table2 entry={comments} onSave={handleSaveToDatabase} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
