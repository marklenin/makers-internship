import React from "react";
import "./App.css";
import MyRoutes from "./MyRoutes";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
    </div>
  );
}

export default App;
