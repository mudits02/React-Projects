//Creates a React object for you
//const heading = React.createElement("h1" , {id : "heading" , someRandomAttribute : "Loda"} , "Hello World from React");
/**
     * <div id="parent">
     *      <div id="child"
     *          <h1> I am h1 ..... </h1>
     *          <h2> I am h2 ... </h2>
     *      </div>
     * </div>
     */ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, [
    "I am h1 from inside the nested divs",
    React.createElement("h2", {}, "h2 tag from nested div")
])));
console.log(parent);
//This makes it for the browser to understand
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendeer method takes this object converts this root object into actual heading and puts it on the browser
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
