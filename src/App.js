import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Packages from "./packages";
import PackagesDetail from "./packagesDetail";
import ComingSoon from "./comingSoon";


// import "./assets/materialize.min.css";
// import "./assets/util.css";
// import "./assets/style.css";
// import "./assets/responsive.css";



function App() {



  return (
    
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/data-packages" element={<Packages/>}/>
            <Route path="/packages-detail/:id" element={<PackagesDetail/>}/>
            <Route path="/coming-soon" element={<ComingSoon/>}/>
        </Routes> 
    </div>
  );
}

export default App;
