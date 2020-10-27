import React from 'react';
import './App.css';
import Header from './components/header/Header';
import AddTaskForm from './components/task-form/AddTaskForm';
import TaskList from './components/task-list/TaskList';
class App extends React.Component {
  render() {
      return (
        <div className="container main-wrapper">
       <Header title="To Do List"/>
       <AddTaskForm/>
       <TaskList/>
        </div>
      )
  }
}

export default App;
