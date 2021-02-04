import React from 'react';
import Contant from '../contant/Contant';
import Header from '../header/Header';
import arrow from "../arrow.svg";
import "./shop.css";


const Shop = () => {
    return (
        <div className="shop">
            <div className="shop-container">
                <Header />
            </div>
            <acide className="shop-text">
                <h2 className="main-title">We are available all across the globe</h2>
                <p>With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                    store locator. Any questions? Don't hesitate to contact us today.</p>
                <div className="arrow-wrap">
                    <a href="#" className="shop-now">Shop now</a>
                    <img className="shop-arrow" src={arrow} alt="right arrow img"/>
                </div>
            </acide>
            <Contant />
        </div>
    )
}

export default Shop;
