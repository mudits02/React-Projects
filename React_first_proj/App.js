import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header 
 *  - Logo
 *  - Nav Items
 * Body 
 *  - Search
 *  - Restaurant Container
 *      -Restaurant Card
 *          - image
 *          - Name of res , stars , cuisine
 * Footer
 *  - Copyright
 *  - Links
 */


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


const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
        
    )
}

const RestaurantCard = () =>
{
    return(
        <div className="res-card">
            <h1>Lund Foods</h1>
            <div className="res-img">

            </div>
        </div>

    )
}

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
