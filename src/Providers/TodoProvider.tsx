import React from "react";
import axios from 'axios'
import { toast } from "react-hot-toast";

export type ITodo= {
    id:number,
    title: string;
    date:string,
    dueDate:string,
    completed: boolean;
  }
  export type PostITodo= {
    title: string;
    date:string,
    dueDate:string,
    completed: boolean;
  }
  export type TodoContextType = {
    todos: ITodo[]|null;
    getTodos:() => void;
    addTodo: (todo: PostITodo) => void;
    updateTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
  };
  type ThemeContextProviderProp={
    children:React.ReactNode
  }

  export const TodoContext = React.createContext<TodoContextType | null>(null);

  const TodoProvider= ({ children }:ThemeContextProviderProp) => {
    const [todos, setTodos] = React.useState<ITodo[]|null>(null);
    const addTodo = (todo: PostITodo) => {
      const newTodo: PostITodo = {
        title: todo.title,
        date:todo.date,
        dueDate:todo.dueDate,
        completed: false,
      };
      axios.post('http://localhost:4000/todos',newTodo)
      .then(res=>{
        toast.success("Todo added successfully")
        getTodos()
      })
      .catch(err=>console.log(err.message))
    };
    const updateTodo = (id: number) => {
      const selectedItem:(ITodo|undefined)=todos?.find((item:ITodo)=>item.id===id)
      if(selectedItem){
      selectedItem.completed=!selectedItem?.completed;
      axios.put(`http://localhost:4000/todos/${id}`,selectedItem)
      .then(res=>{
        toast.success("Todo updated successfully")
        getTodos()
    })
      .catch(err=>console.log(err.message))
    }
    };
    const deleteTodo = (id: number) => {
        axios.delete(`http://localhost:4000/todos/${id}`)
        .then(res=>{
            toast.success("Todo deleted successfully")
            getTodos()
        })
        .catch(err=>console.log(err.message))
      };
    const getTodos = () => {
      axios.get(`http://localhost:4000/todos`)
      .then(res=>setTodos(res.data))
      .catch(err=>console.log(err.message))
    };
    return <TodoContext.Provider value={{ todos, addTodo, updateTodo,getTodos,deleteTodo }}>
                {children}
            </TodoContext.Provider>;
  };
  
  export default TodoProvider;