import { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { ITasks } from "../../models/ITask";
import { EditTask } from "../editTask/EditTask";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css"

interface TaskListProps {
    tasks: ITasks[],

}
const TaskList: FC<TaskListProps> = ({ tasks }) => {
    const archivedTask: ITasks[] = tasks.filter(item => item.active == false)
    const activeTask: ITasks[] = tasks.filter(item => item.active == true)
    const togleArchiveView = useAppSelector(state => state.taskReducer.togleArchiveView)
    return (
        < >{
            togleArchiveView ? archivedTask.map(task => {
                return( 
                <div className="task-item-wrapper" key={task.id} >
                    {task.editStatus ? <EditTask task={task} /> : <TaskItem task={task} />}
                </div>)
            }) : activeTask.map(task => {
                return (
                <div key={task.id} >
                    {task.editStatus ? <EditTask task={task} /> : <TaskItem task={task} />}
                </div>)
            })}
        </>)
}

export default TaskList;