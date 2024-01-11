{/* <div id="parent">
    <div id="child">
        <h1>I'm from H1</h1>
        <h2>I'm from H2</h2>
    </div>
    <div id="child1">
        <h1>I'm from H1-1</h1>
        <h2>I'm from H2-2</h2>
    </div>
</div> */}



const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm fro H1"),
    React.createElement("h2", {}, "I'm fro H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm fro H1-1"),
    React.createElement("h2", {}, "I'm fro H2-1"),
  ]),
]);

// const heading = React.createElement(
//   // this is react element = normal js object
//   "h1", // type
//   { id: "heading" }, // attributes
//   "Hello World from ReactJS!" // childers
// );
console.log(parent); // just a object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
