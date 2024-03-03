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


const RestaurantCard = (props) =>
{
    const {resName , cuisine} = props; //This is called js Destructuring
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/8/18739658/14f7f41e1faf92f1e2b3091159b4c42b.jpg" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>6.9 stars</h4>
            <h4>100 minutes</h4>
        </div>

    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container" >
                <RestaurantCard
                    resName="Lund Foods"
                    cuisine="Chut ka Pani , North Indian"
                />
                <RestaurantCard 
                    resName="Chut Foods"
                    cuisine="thailandi Chut , BSDK"
                />
                
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
