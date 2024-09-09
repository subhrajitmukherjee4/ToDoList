import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export default function TodoList(){
    let styles={
        textDecoration: 'line-through',
    };
    let [todos, setTodos] = useState([{task:"task1", id: uuidv4(), isDone : false}]);
    let [newTask,setNewTask] = useState("");
    let addNewTask=()=>{
        // setTodos([...todos, {task:newTask,id: uuidv4()}]);  or
    setTodos((prevTodos)=>{  // recommended
        return [...prevTodos, {task: newTask,id: uuidv4(),isDone : false }]
    });
      
        setNewTask("");
    };
    let updateTodoValue=(e)=>{
        setNewTask(e.target.value);
        console.log(e.target.value);
    };

    let deleteTodos=(id)=>{
        setTodos((prevTodos)=>    todos.filter((prevTodos)=>prevTodos.id !=id ));
};

// let upperCaseAll=()=>{
//     setTodos((prevTodos)=>
//         prevTodos.map((todo)=>{
//             return {...todo, task: todo.task.toUpperCase(),

//             };
//         })
//     ) ;
// };

let upperCaseAll=()=>{
    setTodos(
        todos.map((todo)=>{
            return {...todo, task:todo.task.toUpperCase() }
        }
    )
);
};

let MarkAllAsDone=()=>{
    setTodos(
        todos.map((todo)=>{
            return  {...todo, isDone: true,}
        }
    )
);
};

let UpperCaseOne=(id)=>{
    setTodos(
        todos.map((todo)=>{
            if(todo.id === id){
                return {...todo, task:todo.task.toUpperCase() };
            } else {
                return todo;
            }
           
        })
    
);
};

let markAsDone=(id)=>{
    setTodos((prevTodos) =>
        prevTodos.map((todo)=>{
            if (todo.id ===id){
                return {...todo, isDone: true,};
            }else{
                return todo;
            }
        })
    );   
};

let UnMark=(id)=>{
    setTodos(
 todos.map((todo)=>{
    if(todo.id=== id){
        return {...todo, isDone:false};
    }else{
        return todo;
    }
 })
    );
};

    return(
<div>
<input placeholder="add task" value={newTask} onChange={updateTodoValue}></input> &nbsp;&nbsp;&nbsp;
<button onClick={addNewTask}>Add</button><br/><br/><br/>
<hr/>
<h2>Tasks ToDo:</h2>
<ul>
    {/* {
           todos.map((t)=>{
           return<li>{t}</li>
    })} */}

    {/* or  - either use return or () instead of {}  */} 

    { 
        todos.map((todo)=>(
            <li key={todo.id}>
                <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span> &nbsp; &nbsp; &nbsp;
                {/* arrow func does'nt execute the func it just create a copy with an argument.
                But normal func execute the function directly with argument, which in this case will not work for click func */}
                <button onClick={()=>{deleteTodos(todo.id)}}>Delete</button>
                 <button onClick={()=>{UpperCaseOne(todo.id)}}>UpperCase</button>
                 <button onClick={()=>{markAsDone(todo.id)}}>Done</button>
                 <button onClick={()=>{UnMark(todo.id)}}>Redo</button>
                 </li>
        ))
    }
   
 
</ul>
<button onClick={upperCaseAll}>Upper Case All</button>
<button onClick={MarkAllAsDone}>Mark All as Done</button>
</div>
    );
};