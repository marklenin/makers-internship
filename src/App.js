import React from "react";
import "./App.css";
import MyRoutes from "./MyRoutes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
