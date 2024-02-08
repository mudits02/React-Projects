import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
    <h1 className="head">
    Heading using JSX
    </h1>
);

//console.log(jsxHeading);

const Title = () =>
(
    <h1>
        Injected functions Component from the title
    </h1>
);

const number = 1000;

// Functional Component
const HeadingComponent = () =>
(
    
    
    <div id="container">
        <Title />
        {number}
        <h2>{100 + 200}</h2>
        <h1 className="container">Call from the functional Component</h1>
        
    </div>
    
);




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);