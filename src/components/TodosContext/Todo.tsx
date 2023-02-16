import { BsCircle,BsCheck,BsTrash } from "react-icons/bs";
export type ShowITodo= {
    id:number
    title: string;
    date:string,
    dueDate:string,
    completed: boolean;
    changeCompleted:(id:number)=>void
    removeTodo:(id:number)=>void
  }
const Todo = ({title,completed,changeCompleted,removeTodo,id}:ShowITodo) => {
    return ( 
        <div className="flex justify-between items-center bg-cyan-200 py-2 px-4 rounded">
                <p>{title}</p>
                <div className="flex gap-2 items-center">
                <span onClick={()=>changeCompleted(id)}>{completed ?<BsCheck />:<BsCircle/>}</span>
                <span onClick={()=>removeTodo(id)}><BsTrash /></span>
                </div>

        </div>
     );
}
 
export default Todo;