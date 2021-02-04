import React from 'react';
import Header from '../header/Header';
import "./home.css";
import arrow from "../arrow.svg";
import Contant from '../contant/Contant';
import left from "../angle-left.svg";
import right from "../angle-right.svg";



const Home = () => {
    
    return (
        <div className="home">
            <div className="home-container">                
                <Header />
            </div>
            <acide className="home-text">
                <h2 className="main-title">Discover innovative ways to decorate</h2>
                <p>We provide unmatched quality, comfort, and style for property owners across the country. 
                Our experts combine form and function in bringing your vision to life. Create a room in your 
                own style with our collection and make your property a reflection of you and what you love.</p>
                <div className="arrow-wrap">
                    <a href="#" className="shop-now">Shop now</a>
                    <img className="shop-arrow" src={arrow} alt="right arrow img"/>
                </div>
            </acide>
            <Contant />
        </div>
    )
}

export default Home;
