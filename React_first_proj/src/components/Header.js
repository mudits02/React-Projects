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
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
            <div className="logo-container">
                <Link to="/">
                    <img className="w-48" src = {LOGO_URL} />
                </Link>
            </div>

            <div className="flex items-center">
                <ul className="flex m-5 p-5">
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4">
                    <Link to="/">Home</Link>
                    </li>

                    <li className="px-4">
                    <Link to="/about">About Us</Link>
                    </li>

                    <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    
                    <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                    </li>

                    <li className="px-4">
                        Cart
                    </li>
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
