import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header"
import Body from "./componenets/Body"
import RestaurantCard from "./componenets/RestaurantCard";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src ="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Madarchod</li>
                </ul>
            </div>
        </div>
    )
}


// RestaurantList is JSON Data for displaying cards

  
const Applayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
