import React, { useState } from 'react';

const Table2 = ({ entry, onSave }) => {
  // Local state to track which row is being edited before submission
  const [tempStatus, setTempStatus] = useState({});

  const handleStatusChange = (id, value) => {
    setTempStatus((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="table border w-full">
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Recipe Id</th>
            <th>Message</th>
            <th>Status</th>
            <th>Reaction</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entry && entry.map((value) => {
            // Priority: use the locally selected status, otherwise fallback to database status
            const currentStatus = tempStatus[value.id] || value.status;

            return (
              <tr key={value.id}>
                <td>{value.user_info_id}</td>
                <td>{value.user_name}</td>
                <td>{value.email}</td>
                <td>{value.recipe_id}</td>
                <td>{value.message}</td>
                <td>
                  <select 
                    className="select select-bordered select-xs"
                    value={currentStatus}
                    onChange={(e) => handleStatusChange(value.id, e.target.value)}
                  >
                    <option value="pending">pending</option>
                    <option value="accepted">accepted</option> 
                    <option value="rejected">rejected</option>
                  </select>
                </td>
                <td>{value.reaction}</td>
                <td>
                  <button 
                    className="btn btn-success btn-xs"
                    onClick={() => {
                      // REQUIRED: Must send all three fields to prevent 500 Error
                      onSave(value.id, {
                        message: value.message,
                        status: currentStatus,
                        reaction: value.reaction
                      });
                    }}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
