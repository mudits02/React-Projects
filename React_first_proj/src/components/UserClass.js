import React from "react";

class UserClass extends React.Component{

    constructor(props)
    {
        super(props);
        console.log(this.props.name + "Child Constructor")
        //In class based components, we use just keep adding the state variables in the object
        // Like below
        this.state = {
            userInfo : {
                name: "Dummy Name",
                location: "Default Location",
                company: "Jhaant",
            }
        };
    };

    async componentDidMount()
    {
        const data = await fetch("https://api.github.com/users/mudits02");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
        console.log(json);
    }

    componentDidUpdate()
    {
        console.log("Component Did Update");
    }

    render(){
        console.log(this.props.name + "Child Render")
        const {name , location , avatar_url , company} = this.state.userInfo;
        //const {count} = this.state;

        return(
            <div className="user-card">
                <img src={avatar_url} className="about_us_avatar"/>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h3>Company: {company}</h3>

            </div>
        )
    }
}

export default UserClass;