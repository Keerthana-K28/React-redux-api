import React from "react";
import { Route, Routes } from "react-router-dom";
import  Userdata  from "./components/Userdata";
import     AddUser     from "./components/AddUser";
import EditUser  from "./components/EditUser";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Userdata />} />
      <Route path="/add-user" element={<AddUser />}/>
      <Route path="/edit-user/:user"element={<EditUser/>}/>
    </Routes>
  );
}

export default App;
  