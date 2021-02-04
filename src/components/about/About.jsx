import React from 'react';
import arrow from "../arrow.svg";
import Contant from '../contant/Contant';
import Header from '../header/Header';
import "./about.css";

const About = () => {
    return (
        <div className="about">
           <div className="about-container">
                <Header />
            </div>
            <acide className="about-text">
                <h2 className="main-title">Manufactured with the best materials</h2>
                <p>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                    experience in this industry, we understand what customers want for their home and office.</p>
                <div className="arrow-wrap">
                    <a href="#" className="shop-now">Shop now</a>
                    <img className="shop-arrow" src={arrow} alt="right arrow img"/>
                </div>
            </acide>
            <Contant />
        </div>
    )
}

export default About;
