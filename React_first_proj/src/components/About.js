import UserClass from "./UserClass"
import React from "react";


class About extends React.Component{


    constructor(props)
    {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount()
    {
        console.log("Parent Did Mount");
    }

    render()
    {
        console.log("Parent Render");
        return(
            <div className="about-page">
                <h1>About Us</h1>
                <UserClass name={"First Child (Class)"} location={"Gwalior (Class)"} twitter={"mudits02 (Class)"} />
            </div>
        )
    }
   
}
    


export default About;