import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <input type="checkbox" id="toggle" />
            <label className="side-toggle"
                for="toggle"><span className="fas fa-bars"></span>
            </label>
            <h4>Dashboard</h4>
            <div className="search">
                <input type="text" name="search" placeholder="Search heare"></input>
                <label for="search"><i className="fas fa-search"></i></label>
            </div>
            <Link to={`/form`} className="nav-link">Registration</Link>
            <i className="fas fa-bell"></i>
            <div className="user">
                <img src={require("../navbar/images/rohit.jpg")} />
            </div>
        </div>
    )
}

export default Navbar;























{/*import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import axios from "axios";

const Navbar = () => {
 
    return (
         <div className="navbar">
             <div className="search">
                 <input type="text" name="search" placeholder="Search here"></input>
                  <label for="search"><i className="fas fa-search"></i></label>
                     </div>
                     <Link to={`/booking`} className="nav-link">List of Bookig</Link>
                      <i className="fas fa-bell"></i>
                         <div className="user">
                         <img src={require("../sidebar/images/rohit.jpg")} />
                      </div>
                  </div>        
    );
};
export default Navbar;*/}