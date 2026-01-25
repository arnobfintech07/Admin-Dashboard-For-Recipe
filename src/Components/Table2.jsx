import React from 'react';

const Table2 = ({ entry }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full ">
        <thead>
          <tr className="text-left">
            <th>User ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Recipe Id</th>
            <th>Message</th>
            <th>Status</th>
            <th>Reaction</th>
          </tr>
        </thead>
        <tbody>
          {entry && entry.length > 0 ? (
            entry.map((value) => (
              <tr key={value.id} className="border-t">
                <td>{value.user_info_id}</td>
                <td>{value.user_name}</td>
                <td>{value.email}</td>
                <td>{value.recipe_id}</td>
                <td>{value.message}</td>
                <td>
                  <span className={`badge ${value.status === 'pending' ? 'bg-red-700' : 'bg-green-200'}`}>
                    {value.status}
                  </span>
                </td>
                <td>{value.reaction}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4">No reviews found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
