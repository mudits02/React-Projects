import { LOGO_URL } from "../utils/constants.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {

    const [btnNameReact , setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    useEffect(() => {
        console.log("useEffect called");
    }, [btnNameReact]);
    console.log("Header Rendered"); // whenever we click login button, it logs this.
    //let btnName = "Login";

    return(
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <img className="logo" src = {LOGO_URL} />
                </Link>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>

                    <li>
                    <Link to="/about">About Us</Link>
                    </li>

                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    
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
