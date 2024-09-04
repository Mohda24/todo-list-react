import React, { useState } from 'react';
import InputAddTask from './components/inputAddTask';
import {TaskNotDone,TaskDone} from './components/TaskNotDone'
import {addToLocaleStorage,getTasks} from './helper/addToLocaleStorage'
export default function  TodoList(){
    let [tasks,setTasks]=useState(getTasks()[0]);
    console.log(getTasks[0]);
    
    
    let [newtask,setNewtask]=useState("");
    let [tasksDone,settaskDone]=useState(getTasks()[1])
    const handleInputChange=(event)=>{
        setNewtask(event.target.value)
    }
    const addTask=()=>{
        if(newtask.trim() !== ''){
            const updatedTasks=[...tasks,newtask]
            addToLocaleStorage([updatedTasks,tasksDone]);
            setTasks(updatedTasks);
            setNewtask(""); 
    }
    }
    const displayTasksHasNotDone=(data)=>{
        const ListItems=data.map((task,index)=><TaskNotDone taskDone={()=>{markTaskDone(index)}} deleteTask={()=>{deleteTask(index)}} task={task} key={index}/>);
        return(
            <>
            {ListItems}
            </>
        )

    }
    const displayTasksHasDone=(data)=>{
        const ListItems=data.map((task,index)=><TaskDone task={task} key={index}/>);
        return(
            <>
            {ListItems}
            </>
        )

    }
    const deleteTask=(index)=>{
        const updatedTasks=tasks.filter((_,i)=>index!=i);
        addToLocaleStorage([updatedTasks,tasksDone]);
        setTasks(updatedTasks);
    }
    const markTaskDone=(index)=>{
        let taskDone=tasks[index];
        const updatedTasksNotDone=tasks.filter((_,i)=>i!=index);
        const updatedTasksDone=[...tasksDone,taskDone]
        addToLocaleStorage([updatedTasksNotDone,updatedTasksDone]);
        setTasks(updatedTasksNotDone);
        settaskDone(updatedTasksDone)
    }
    return(
        <div className='container px-[15px]'>
            <div className='w-[100%] max-w-[583px] min-h-[758px] bg-[#1D1825] rounded-[20px] p-[60px] mx-auto'>
                <InputAddTask newTask={newtask} handleInputChange={handleInputChange} addTask={addTask}/>
                <h3 className='text-[20px] text-white font-[400] capitalize mb-[20px]'>Tasks to do - {tasks ?tasks.length :'0'}</h3>
                {tasks && displayTasksHasNotDone(tasks)}
                <h3 className='text-[20px] text-white font-[400] capitalize mb-[20px] mt-[60px]'>Done - {tasksDone ?tasksDone.length :'0'}</h3>
                {tasksDone && displayTasksHasDone(tasksDone)}
            </div>
        </div>
    )
}
