import React, { FC } from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { ITasks } from '../../models/ITask'
import { IconSelect } from '../Icon/Icon'
import "./SummaryItem.css"
interface SummaryItemProps {
    task: ITasks;

}
export const SummaryItem: FC<SummaryItemProps> = ({ task }) => {
    let tasks = useAppSelector(state => state.taskReducer.tasks)
    const filterActiveTask = () => {
        let result = tasks.filter((item) => item.category == task.category && item.active == true);
        return result.length;
    }
    const filterArchiveTask = () => {
        let result = tasks.filter((item) => item.category == task.category && item.active == false);
        return result.length;
    }
    return (
        <div>
            <div className="summary-item-wrapper">
                <div className="summary-item">
                    <div className="summary-item_name">
                        <div className="item-icon "><IconSelect  category={task.category} /></div>
                        <div  className="summary-item_name">{task.category} </div>
                    </div>

                </div>
                <div className="summary-item">
                    <div >{filterActiveTask()}</div>
                    <div >{filterArchiveTask()}</div>
                </div>

            </div>
        </div>

    )
}
