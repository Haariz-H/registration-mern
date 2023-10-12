import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListEmployee() {
  const [userForm, setUserForm] = useState([]);
  const deleteEmployee = (_id) => {
    console.log(_id);
    axios
      .delete("http://localhost:4000/employees/delete-employee/" + _id)
      .then(() => {
        console.log("Data successfully added");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/employees/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Emp No</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.empno}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/edit-employee" + user._id}
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => deleteEmployee(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployee;
