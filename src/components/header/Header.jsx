import React from 'react';
import left from "../angle-left.svg";
import right from "../angle-right.svg";
import "./header.css";
import {Link} from "react-router-dom";


const Header = () => {    
    return (
        <nav className="navbar">      
            <input type="checkbox" name="hamburger" id="menu__toggle" />
            <label htmlFor="menu__toggle" className="hamburger-button">
                <span className="hamburger-lines"></span>
            </label>
            <span className="brand active">Room</span>
            <div className="row-container">
                <ul className="ul-container">
                    <span className="row-brand active">Room</span>
                    <li><Link to={"/"} exact><span className="menu__item">Home</span></Link></li>
                    <li><Link to={"/shop"}><span className="menu__item">Shop</span></Link></li>
                    <li><Link to={"/about"}><span className="menu__item">About</span></Link></li>
                    <span className="item">Contact</span>   
                </ul>
            </div>              
            <div className="menu__box">                              
                <ul className="menu-box-container">
                    <li><Link to={"/"} exact><span className="menu__item">Home</span></Link></li>
                    <li><Link to={"/shop"}><span className="menu__item">Shop</span></Link></li>
                    <li><Link to={"/about"}><span className="menu__item">About</span></Link></li>
                    <span className="item">Contact</span>
                </ul>
            </div>
            <div className="nav-arrow">
                <Link to={"/shop"}><img src={left} className="left" alt="left arrow img"/></Link>
                <Link to={"/about"}><img src={right} className="right" alt="right arrow img"/></Link>
            </div>       
        </nav>
    )
}

export default Header;
