import React, { useState } from "react";
import axios from "axios";

function CreateEmployee() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    empno: "",
  });
  const inputHandler = (e) => {
    setUserForm((preNext) => ({
      ...preNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/employees/create-employee", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          name: "",
          email: "",
          empno: "",
        });
      });
  };

  return (
    <div>
      <h1>Create Employee</h1>
      <div>
        <form className="my-5" onSubmit={onSubmit}>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form6Example3"
              className="form-control"
              name="name"
              onChange={inputHandler}
              value={userForm.name}
            />
            <label className="form-label" for="form6Example3">
              Employee Name
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form6Example5"
              className="form-control"
              name="email"
              onChange={inputHandler}
              value={userForm.email}
            />
            <label className="form-label" for="form6Example5">
              Email
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="number"
              id="form6Example6"
              className="form-control"
              name="empno"
              onChange={inputHandler}
              value={userForm.empno}
            />
            <label className="form-label" for="form6Example6">
              Employee Number
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4"
            //   onClick={console.log}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEmployee;
