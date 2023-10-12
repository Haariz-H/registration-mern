import React from "react";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import CreateEmployee from "./pages/CreateEmployee";
import ListEmployee from "./pages/ListEmployee";
import EditEmployee from "./pages/EditEmployee";

function App() {
  return (
    <div>
      <MenuBar></MenuBar>
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployee />}></Route>
          <Route path="/create-employee" element={<CreateEmployee />}></Route>
          <Route path="/list-employee" element={<ListEmployee />}></Route>
          <Route path="/edit-employee" element={<EditEmployee />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
