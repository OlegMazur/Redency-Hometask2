import { FC, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { ITasks } from "../../models/ITask";
import { EditTask } from "../editTask/EditTask";
import { SummaryItem } from "../SummaryItem/SummaryItem";
import TaskItem from "../TaskItem/TaskItem";

interface SummaryListProps {
    tasks: ITasks[],
   
}
const SummaryList:FC<SummaryListProps>=({tasks})=>{
    const resultFind:any=[];
      useAppSelector(state=>state.taskReducer.tasks).forEach((task) => {
        if ( !resultFind.includes( tasks.find(item => item.category == task.category))) {
			resultFind.push(task)
		};
    });
     return <div>
         {resultFind.map((task:any)=>{
             return <div key={task.id} >
                    {<SummaryItem task={task} />}
              </div>}
         )}
     </div>

}
export default SummaryList;