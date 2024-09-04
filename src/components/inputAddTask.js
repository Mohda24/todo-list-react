import React from "react";
import ReactLearningSVG from  "../svg/ReactLearning.svg"
export default function InputAddTask({newTask,handleInputChange,addTask}){
    return(
        
            <div className="flex items-center mb-[50px]">
                <input
                className="w-[100%] max-w-[381px] h-[40px] rounded-[10px] bg-transparent border text-white border-[#9E78CF] placeholder:text-[#777] py-[10px] ps-[15px] me-[11px]"
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={handleInputChange}
                />
                <button 
                className="w-[40px] h-[40px] border-none outline-none bg-[#9E78CF] rounded-[10px] cnt hover:opacity-90   duration-200 transition-opacity"
                onClick={addTask}
                ><img src={ReactLearningSVG}></img></button>
            </div>
        
    )
}