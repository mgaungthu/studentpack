import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Packages from "./packages";
import PackagesDetail from "./packagesDetail";
// import "./assets/materialize.min.css";
// import "./assets/util.css";
// import "./assets/style.css";
// import "./assets/responsive.css";



function App() {

  // alert(process.env.REACT_APP_BASE_URL);

  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/data-packages" element={<Packages/>}/>
            <Route path="/packages-detail/:id" element={<PackagesDetail/>}/>
        </Routes> 
    </>
  );
}

export default App;
