import React from 'react'
import "./Navbar1.css";

const Navbar1 = () => {
    return (
        <div className="navbar1" >

            <ul className="box">
                
                    
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li className='name'> <input type="text" name="search" placeholder="Search heare"></input><label className='icon'><i className="fas fa-search"></i></label></li>
            </ul>
             
        </div>
    )
}

export default Navbar1;
