import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";

const Header = () => {

    const [btnNameReact , setBtnNameReact] = useState("Login");
    console.log("Header Rendered"); // whenever we click login button, it logs this.
    //let btnName = "Login";

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Madarchod</li>
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
