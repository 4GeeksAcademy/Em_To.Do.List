//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
<<<<<<< HEAD
import Todolist from "./component/todolist.jsx";

//render your react application
ReactDOM.render(<Todolist />, document.querySelector("#app"));
=======
import ToDoList from "./component/toDoList.jsx";



//render your react application
ReactDOM.render(<ToDoList />, document.querySelector("#app"));
>>>>>>> c26266376000c61b0cfa602f2a2aae60d0758872
