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

const Applayout = () => {
    return(
        <div className="app">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
