import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   // this is react element = normal js object
//   "h1", // type
//   { id: "heading" }, // attributes
//   "Hello World from ReactJS!" // childers
// );
// console.log(heading); // just a object

// below is react element bcz JSX => React.createElemetn using Babel => React Element (JS Object) => HTML Element (after render)
const Title = () => (
  <h1 id="head" className="header">
    Hello using JSX
  </h1>
);

// component composition means component inside component
// below is functional component which means a JS function which return JSX code then it is functional component
const Heading = () => (
  <div id="container">
    <span>
      {Title() }
      {12+12}
    </span>
    <h1 id="head" className="header">
      Hello From functional component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
