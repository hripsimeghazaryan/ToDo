import { React, useState } from "react";
import Task from "../Task/Task";
import { Divider } from '@mui/material';
import Popup from "../Popup/Popup";
import './Tasks.css'

function Tasks ({data, removeTask, completeTask, filter}) {
    const [id, setId] = useState(0);
    const [open, setOpen] = useState(false);
    const taskList = filter ? data.filter(task => task.completed !== filter) : data;

    const handlePopUp = () => {
        setOpen(!open);
    };

    return (
        <div className="tasks-list">
            {data && taskList.map((index) => {
                return (
                    <div>
                        <Task 
                        task={index.task} 
                        id={index.id} 
                        completed={index.completed} 
                        removeTask={removeTask}
                        completeTask={completeTask}
                        handlePopUp={handlePopUp}
                        setId={setId}
                        />
                        <Divider />
                    </div>
                )
            })}
            <Popup open={open} handlePopUp={handlePopUp} id={id} removeTask={removeTask} />
        </div>   
    )
} 

export default Tasks;
