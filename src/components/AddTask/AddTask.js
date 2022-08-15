import { React, useState } from "react";
import { TextField, Button, InputLabel } from '@mui/material';
import './AddTask.css';

function AddTask ({submitTask}) {
    const [task, setTask] = useState("");
    const [error, setError] = useState("");

    const addTask = (event) => {
        event.preventDefault();
        if(!error && task) {
            const newTask = {
                task: task,
                id: Date.now(),
                completed: false
            }
            submitTask(newTask);
            setTask("");
        }
    }

    const handleChange = (event) => {
        setTask(event.target.value)
        if(task.length > 54) {
            setError("Task content can contain max 54 characters")
        } else {
            setError("")
        }
    }

    return (
        <div className="add-task-container">
            <InputLabel className="add-task-label">Task</InputLabel>
            <form className="form-container" onSubmit={addTask}>
                <div className="add-task-input">
                    <TextField 
                    fullWidth 
                    placeholder="Write here"
                    variant='outlined' 
                    value={task}
                    onChange={handleChange}
                    error={task.length > 54}
                    helperText={error}
                    style={{
                        borderColor: "rgb(252, 205, 4)",
                        padding: "12px",
                    }}
                    />
                </div>
                <div className="add-task-button">
                    <Button 
                    type="submit"
                    variant="contained"
                    >
                        Add
                    </Button>
                </div>
            </form>
        </div>
    )
} 

export default AddTask;