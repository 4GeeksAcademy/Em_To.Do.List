import React, { useState } from "react";

const toDoList = () => {
          const [ userInput, setUserInput ] = useState('');
          const [tasks, setTasks] = useState([])

          window.validateInput = () => {
            if(userInput === "") alert("The input cannot be empty");
          }
         function emilio (e) {
          console.log("Hola")
         }

	return (
    <div className="text-center">
            <div className="main-container container-fluid">
                <h1>To-Do-List</h1>
                <ul>
                  <li>
                    <input type="text" className="form-control" 
                    placeholder="Enter your next task here" 
                    onChange={(e) =>setUserInput(e.target.value)}
                    value={userInput}
                    onKeyDown={(e)=> {
                      console.log(e.key)
                      }
                    }/>                  
                  </li>
                  <li>
                    <input type="text" className="form-control" 
                    onKeyDown={(e)=>{console.log("hola")}} />
                  </li>
                </ul>
                <button onClick={validateInput}>click me</button>
            </div>
      </div>
	);
};
export default toDoList;