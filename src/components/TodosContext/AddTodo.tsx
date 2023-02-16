import React, { useContext } from "react";
import { TodoContext, TodoContextType } from "../../Providers/TodoProvider";

const AddTodo = () => {
    const {addTodo}=React.useContext(TodoContext) as TodoContextType;
    const [formValue,setFormValue]=React.useState({title:"",dueDate:""});
    const changeHandler=(e: React.FormEvent<HTMLInputElement>):void=>{
        console.log(e.currentTarget.value)
        setFormValue({...formValue,[e.currentTarget.name]:e.currentTarget.value})
    }
    const submitHandler=(e: React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault();
       addTodo({...formValue,completed:false,date:new Date().toDateString()})
    }
    return ( 
        <div className="mb-10">
            <form className="flex flex-col gap-6" onSubmit={submitHandler}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="title">title</label>
                    <input type="text" name="title" id="title" value={formValue.title} onChange={changeHandler} className="focus:outline-none ring-1 ring-cyan-400 p-2 rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="dueDate">due date</label>
                    <input type="date" name="dueDate" id="dueDate" value={formValue.dueDate} onChange={changeHandler} className="focus:outline-none ring-1 ring-cyan-400 p-2 rounded" />
                </div>
                <input type="submit"  value="Add Todo" className="bg-cyan-300 p-2 rounded cursor-pointer" />
            </form>
        </div>
     );
}
 
export default AddTodo;