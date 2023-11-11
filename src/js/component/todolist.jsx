import React, { useState } from "react";

const Todolist = () => {
    const [ userInput, setUserInput ] = useState('');
    const [tasks, setTasks] = useState([''])

    function validateInput () {
      if(userInput === "") alert("The input cannot be empty");          
    }  
    return (            
    <div className="padre text-center">
      <h1>todos</h1>    
        <div className="main-container">              
        <ul>
          <li>
            <input type="text" className="main-input" 
            placeholder="  Enter your next task here" 
            onChange={(e) =>setUserInput(e.target.value)}
            value={userInput}
            onKeyDown={(e)=> { 
              if (e.key === "Enter"){
                setTasks(tasks.concat(userInput))
                setUserInput('')
                validateInput('')   
              }
            }}/>                 
          </li>
          {tasks.map((t, index) => (                  
            <li className="listItem" key={(Math.random())}>
              {t} 
              <i className="float-end p-1 fas fa-trash-alt"
                onClick={()=> setTasks(tasks.filter((t, currentIndex) => index != currentIndex)) } />
            </li>))}    
            <footer className="footer1">
               <p>Total tasks: ({tasks.length})</p>                              
            </footer>                                                                         
            <footer className="footer2">
            </footer>                                                                         
            <footer className="footer3">
            </footer>                                                                         
        </ul>
      </div>
    </div>
  );
};
export default Todolist;