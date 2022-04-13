import { FC } from "react";
import "./TaskItem.css"
import { EditOutlined, DeleteFilled, EditFilled, DatabaseFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { ITasks } from "../../models/ITask";
import { taskSlice } from "../../store/reducers/TaskSlise";
import { useAppDispatch } from "../../hooks/hooks";
import { IconSelect } from "../Icon/Icon";
interface TaskItemProps {
    task: ITasks;
}
const TaskItem: FC<TaskItemProps> = ({ task }) => {
    const { deleteTask,togleEditStatus,addArchiveTask } = taskSlice.actions;
    const dispatch = useAppDispatch();
    const{id,editStatus,created,editDate,active,category}=task;
    const transformDate=(date:string):string|undefined =>{
        let month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
        if(date){
            let newDate = new Date(Date.parse(date));
            return month[newDate.getMonth()] + ' ' + newDate.getDate() + " " + newDate.getFullYear()
       }
    }
    return (
        <div className="task-item-wrapper">
            <div className="task-item-name">
                <div className="item-icon "><IconSelect category={category}/></div>
                <div className="task-item_name">{task.name}</div>
            </div>
            <div className="task-item">{transformDate(created)}</div> 
            <div className="task-item">{task.category}</div>
            <div className="task-item" >{task.content}</div>
            <div className="task-item">{editDate?transformDate(created)+" edit "+transformDate(editDate):""}</div>
            <div className="task-item-buttons">
                <EditFilled type="button" onClick={()=>dispatch(togleEditStatus({id,editStatus}))}/>
                <DatabaseFilled type="button" onClick={()=>dispatch(addArchiveTask({id,active}))}/>
                <DeleteFilled type="button" onClick={() => dispatch(deleteTask(task.id))} />
            </div>
        </div>
    )
}
export default TaskItem