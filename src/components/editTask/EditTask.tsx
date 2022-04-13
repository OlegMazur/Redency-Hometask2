import React, { FC, useState } from 'react'
import { ITasks } from '../../models/ITask'
import "./EditTask.css"
import { EditFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../hooks/hooks';
import { taskSlice } from '../../store/reducers/TaskSlise';
interface TaskEditProps {
    task: ITasks;

}
export const EditTask: FC<TaskEditProps> = ({ task }) => {
    const [text, setText] = useState(task.content)
    const [taskCategory, selectTaskCategory] = useState(task.category);
    const [listName, setListName] = useState(task.name)
    const dispatch = useAppDispatch();
    const { addEditTask } = taskSlice.actions;
    const { id, created, editDate } = task;
    const transformDate = (date: string) => {
        let month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
        let newDate = new Date(Date.parse(date));
        return month[newDate.getMonth()] + ' ' + newDate.getDate() + " " + newDate.getFullYear()
    }
    return (
        <div className="edit-item-wrapper">
            <div className="edit-item">
                <div className="item-icon"><ShoppingCartOutlined /></div>
                <input defaultValue={listName} onChange={(e) => setListName(e.currentTarget.value)} ></input>
            </div>
            <div className="edit-item">
                <select
                    defaultValue={taskCategory}
                    onChange={(e) => selectTaskCategory(e.target.value)}
                    className="browser-default custom-select">
                    <option value="task">Task</option>
                    <option value="randomThougth">Random Thougth </option>
                    <option value="idea">Idea</option>
                    <option value="quote">Quote</option>
                </select>
            </div>
            <div className="edit-item"><input defaultValue={text} onChange={(e) => setText(e.currentTarget.value)}></input></div>
            <div className="edit-item">{transformDate(created)}</div>
            <div className="buttons">
                <EditFilled type="button " onClick={() => dispatch(addEditTask({ id, taskCategory, text, created }))} />
            </div>
        </div>
    )
}
