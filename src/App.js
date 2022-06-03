import React from "react";
import "./style.css";
import Content from "./component/Content"
import Login from "./component/Login"
  import { BrowserRouter,Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={ <Login/>}> */}
          <Route index element={<Login />} />
          <Route path="/Content" element={<Content/>} />
          

      </Routes>
    </BrowserRouter>

      
    </div>
  );
}
