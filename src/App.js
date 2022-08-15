import './App.css';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import Tasks from './components/Tasks/Tasks';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(false);
  const [reload, setReload] = useState(true);
  const localKey = "tasks";

  const addTask = (newTask) => {
    setData(task => [...task, newTask]);
  }

  const removeTask = (id) => {
    setData(tasks => tasks.filter(task => task.id !== id))
  }

  const completeTask = (id) => {
    const selected = data.findIndex(task => task.id === id);
    const updated = [...data];
    updated[selected].completed = !updated[selected].completed;
    setData(updated);
  }

  const onFilter = () => {
    setFilter(!filter);
  }

  useEffect(() => {
    const storedData = localStorage.getItem(localKey)
    setData(JSON.parse(storedData));
    setReload(false)
  }, []);

  useEffect(() => {
    if(!reload) {
      localStorage.setItem(localKey, JSON.stringify(data));
    }
  }, [data]);

  return (
    <div className="App">
      <header 
      className='filter-header'
      style={{visibility: data.length === 0 ? "hidden" : ""}}
      >
        <FormControlLabel
        style={{
          position: "absolute",
          right: "12%",
          top: "4%",
        }}
        label="Hide completed"
        control={<Checkbox 
          onChange={onFilter}
          style={{
            color: "rgb(33, 133, 148)",
          }} 
          />}
        />
      </header>
      <AddTask submitTask={addTask} />
      {
        data.length === 0 ?
        <div className='blank-list'>
          <Typography className="small-heading" variant="h6" gutterBottom component="div">
            Your life is a blank page. You write on it.
          </Typography>
          <Typography className="big-heading" variant="h4" gutterBottom component="div">
            So start by adding your tasks here.
          </Typography>
        </div> 
        :
        <Tasks data={data} removeTask={removeTask} completeTask={completeTask} filter={filter} />
      }
    </div>
  );
}

export default App;
