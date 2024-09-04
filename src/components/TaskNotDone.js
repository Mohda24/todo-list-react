import React from "react";
import TrashSimpleSVG from '../svg/TrashSimple.svg';
import CheckSVG from '../svg/Check.svg';
const TaskNotDone=({taskDone,deleteTask,task})=>{
    return(
        <div  className="bg-[#15101C] rounded-[10px] h-[75px] w-full max-w-[432px] flex items-center justify-between p-[20px] mb-[16px]">
            <p className="content text-[#9E78CF] text-[16px] font-[400]">{task}</p>
            <div className="buttons flex items-center">
                <button
                className="border-none outline-none bg-transparent w-[22px] h-[22px] cnt me-[12px] hover:opacity-95 duration-200 transition-opacity"
                onClick={taskDone}>
                    <img src={CheckSVG} alt="Check tasks"></img>
                </button>
                <button
                className="border-none outline-none bg-transparent w-[22px] h-[22px] cnt  hover:opacity-95 duration-200 transition-opacity"
                onClick={deleteTask}>
                    <img src={TrashSimpleSVG} alt="Remove tasks"></img>
                </button>
            </div>

        </div>
    )
}
const TaskDone=({task})=>{
    return(
        <div  className="bg-[#15101C] rounded-[10px] h-[75px] w-full max-w-[432px] p-[20px] mb-[16px] flex items-center">
            <p className="content text-[#78CFB0] text-[16px] font-[400] line-through">{task}</p>
        </div>
    )
}
export {TaskDone,TaskNotDone}