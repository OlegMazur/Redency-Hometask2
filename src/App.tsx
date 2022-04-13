import React, { FC, useState } from 'react';

import './App.css';
import TaskList from './components/TaskList/TasksList';
import { DeleteOutlined, ShoppingCartOutlined, DatabaseOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { ITasks } from './models/ITask';
import { taskSlice } from './store/reducers/TaskSlise';
import SummaryList from './components/SummaryList/SammaryList';
import { Footer } from './components/Footer/Footer';
const App = () => {

  const [text, setText] = useState('')
  const [taskCategory, selectTaskCategory] = useState("task")
  const [listName, setListName] = useState("")
  const tasks: ITasks[] = useAppSelector(state => state.taskReducer.tasks);
  const togleArchiveView = useAppSelector(state => state.taskReducer.togleArchiveView)
  const togleCreateTask = useAppSelector(state => state.taskReducer.togleCreatedTask);

  const { addTask, changeTogleCreated, changeTogleArchiveView } = taskSlice.actions;
  const dispatch = useAppDispatch();
  const addNewTask = () => {
    dispatch(addTask({ listName, taskCategory, text }));
    setText("");
    setListName("");
  }
  return (
    <div className="App">
      <div className='App-content-wraper'>
        <div className='navbar-wrapper'>
          <div className='navbar-item-name'>Name</div>
          <div>Created</div>
          <div>Category</div>
          <div>Content</div>
          <div>Dates </div>
          <div className="navbar-icon">
            <div><DeleteOutlined /></div>
            <div className={togleArchiveView ? 'header-icon-archive' : ''}><DatabaseOutlined type='button' onClick={() => dispatch(changeTogleArchiveView(togleArchiveView))} /></div>
          </div>
        </div>
        <div className='tasks-list-wrapper'>
          <TaskList tasks={tasks} />
        </div>
        <div className='create-task-btn'><button type="button" onClick={() => dispatch(changeTogleCreated(togleCreateTask))}>Create task</button> </div>
        {!togleCreateTask ?
          <label className='create-task-wrapper' >
            <input defaultValue={listName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setListName(e.currentTarget.value)} />
            <input type="text" defaultValue={text} onChange={(e) => setText(e.currentTarget.value)} />
            <select
              defaultValue={taskCategory}
              onChange={(e) => selectTaskCategory(e.target.value)}
              className="browser-default custom-select">
              <option value="task">Task</option>
              <option value="randomThougth">Random Thougth </option>
              <option value="idea">Idea</option>
              <option value="quote">Quote</option>
            </select>
            <button type="button" onClick={addNewTask}  >
              addTask
            </button>
          </label> : null}
        
        <div className='footer-content'>
        <Footer />
          <div className='tasks-list-wrapper'>
            <SummaryList tasks={tasks} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
