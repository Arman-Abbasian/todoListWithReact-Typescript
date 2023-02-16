import React from "react";
import axios from 'axios'

export type ITodo= {
    id:number,
    title: string;
    date:Date,
    doDate:Date,
    completed: boolean;
  }
  export type PostITodo= {
    title: string;
    date:Date,
    doDate:Date,
    completed: boolean;
  }
  export type TodoContextType = {
    todos: ITodo[]|null;
    getTodos:() => void;
    addTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
  };
  type ThemeContextProviderProp={
    children:React.ReactNode
  }

  export const TodoContext = React.createContext<TodoContextType | null>(null);

  const TodoProvider= ({ children }:ThemeContextProviderProp) => {
    const [todos, setTodos] = React.useState<ITodo[]|null>(null);
    const addTodo = (todo: ITodo) => {
      const newTodo: PostITodo = {
        title: todo.title,
        date:todo.date,
        doDate:todo.doDate,
        completed: false,
      };
      axios.post('http://localhost:4000/todos',newTodo)
      .then(res=>getTodos())
      .catch(err=>console.log(err.message))
    };
    const updateTodo = (id: number) => {
      const selectedItem:(ITodo|undefined)=todos?.find((item:ITodo)=>item.id===id)
      if(selectedItem){
      selectedItem.completed=!selectedItem?.completed;
      axios.put(`http://localhost:4000/todos/${id}`,selectedItem)
      .then(res=>getTodos())
      .catch(err=>console.log(err.message))
    }
    };
    const deleteTodo = (id: number) => {
        axios.delete(`http://localhost:4000/todos/${id}`)
        .then(res=>getTodos())
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