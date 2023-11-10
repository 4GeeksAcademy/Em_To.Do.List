import React, { useState } from "react";

const Todolist = () => {
        const [ userInput, setUserInput ] = useState('');
        const [tasks, setTasks] = useState([''])

        function validateInput () {
          if(userInput === "") alert("The input cannot be empty");
        }  
        return (            
        <div className="text-center">
          <h1>To-Do-List</h1>    
            <div className="main-container">
              <li>
                <input type="text" className="main-input" 
                placeholder="Enter your next task here" 
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
              <ul>
                {tasks.map((t, index) => (                  
                  <li>
                    {t} 
                    <i class="fas fa-trash-alt" onClick={()=> setTasks(tasks.filter((t, currentIndex) => index != currentIndex)) } />
                  </li>))}                                                                              
              </ul>                              
            </div>
    </div>
  );
};
export default Todolist;