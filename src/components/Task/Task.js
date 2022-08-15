import { React } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox, Button } from "@mui/material";
import './Task.css';

function Task ({task, id, completed, completeTask, handlePopUp, setId}) {

    return (
        <div key={id} className="task-item">
            <div>
                <Checkbox 
                checked={completed}
                onChange={() => completeTask(id)}
                style={{
                    color: "rgb(33, 133, 148)",
                }}
                />
                <span 
                style={{color: completed ? "rgb(172, 172, 172)" : "rgb(102, 102, 102)"}}
                className="task-text"
                >
                    {task}
                </span>
            </div>
            <Button variant="text" 
            onClick={() => {
                setId(id);
                handlePopUp();
            }}
            >
                <CloseIcon style={{color: "rgb(23 67 72)"}}/>
            </Button>
        </div>    
    )
} 

export default Task;