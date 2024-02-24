import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./Layout/Layout";
import routes from "./Routes/Router";
import { RouterProvider } from "react-router-dom";
// const heading = React.createElement(
//   // this is react element = normal js object
//   "h1", // type
//   { id: "heading" }, // attributes
//   "Hello World from ReactJS!" // childers
// );
// console.log(heading); // just a object

// below is react element bcz JSX => React.createElemetn using Babel => React Element (JS Object) => HTML Element (after render)

// component composition means component inside component
// below is functional component which means a JS function which return JSX code then it is functional component

// const App = () => {
//   return (
//     <div>
//       <AppLayout />
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routes} />);
