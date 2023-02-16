import { TodoContext, TodoContextType } from "../../Providers/TodoProvider";
import React, { useEffect } from "react";
import Todo from "./Todo";

const Todos = () => {
    const {todos,getTodos,updateTodo,deleteTodo}=React.useContext(TodoContext) as TodoContextType;
    useEffect(()=>{getTodos()},[])
    const changeCompleted=(id:number)=>{
       updateTodo(id) 
    } 
    const removeTodo=(id:number)=>{
        deleteTodo(id)
    }
    return ( 
        <div className="flex flex-col gap-3">
            {todos && 
            todos.map(item=>{
                return<Todo key={item.id} removeTodo={()=>removeTodo(item.id)} changeCompleted={()=>changeCompleted(item.id)} id={item.id}  title={item.title} date={item.date} dueDate={item.dueDate} completed={item.completed} />
            })
            }
        </div>
     );
}
 
export default Todos;