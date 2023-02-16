export type ITodo= {
    title: string;
    date:string,
    doDate:string,
    completed: boolean;
  }
const Todo = ({title,date,doDate,completed}:ITodo) => {
    return ( 
        <div>
            <div>
                <h3>title:</h3>
                <p>{title}</p>
            </div>
            <div>
                <h3>record date"</h3>
                <p>{date}</p>
            </div>
            <div>
                <h3>due date</h3>
                <p>{doDate}</p>
            </div>
            <div>
                {completed}
            </div>
        </div>
     );
}
 
export default Todo;