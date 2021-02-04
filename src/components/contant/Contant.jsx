import React from 'react';
import dark from "./image-about-dark.jpg";
import light from "./image-about-light.jpg";
import "./contant.css";

const Contant = () => {
    return (
        <div className="contant-container">
            <img className="dark-img" src={dark} alt="living room picture"/>
            <div className="contant-text">
                <h2 className="main-title">About our furniture</h2>
                <p>Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <img className="light-img" src={light} alt="white chair picture"/>
        </div>
    )
}

export default Contant;
