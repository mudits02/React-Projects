import { LOGO_URL } from "../utils/constants.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnNameReact , setBtnNameReact] = useState("Login");
    useEffect(() => {
        console.log("useEffect called");
    }, [btnNameReact]);
    console.log("Header Rendered"); // whenever we click login button, it logs this.
    //let btnName = "Login";

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                    <li>Cart</li>
                    <button className="login" 
                    onClick= {() => 
                        btnNameReact === "Login" ? 
                        setBtnNameReact("Logout") : 
                        setBtnNameReact("Login")
                        }>
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
