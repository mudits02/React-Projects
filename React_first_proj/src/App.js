import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header"
import Body from "./componenets/Body"

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
