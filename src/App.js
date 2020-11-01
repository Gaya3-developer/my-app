import React from 'react';
import './App.css';
import Header from './components/header/Header';
import AddTaskForm from './components/task-form/AddTaskForm';
import TaskList from './components/task-list/TaskList';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count:1,
      task: '',
      items: [{id: 1,task: "Buy Groceries"}]
    }
  };

  addTask = (e) => {
    e.preventDefault();
  
    let taskList={
      id:this.state.count+1,
      task:this.state.task,
  }
  
    let items = [...this.state.items];
  
//console.log(items);
    items.push(taskList);

    this.setState({
      items,
      count:taskList.id,
      task: '',
     
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };
  deleteTask = (i) => { 
    //const arr = data.filter((item) => item.name !== i);
     //   setData(arr);
        const newTask=this.state.items.filter(items=>
          items.id!==i);
          this.setState({
            items:newTask
          });
 //   const arr = items.filter((item) => item.name !== i);
   // setData(arr);
  //  console.log(item);
 //   var array = [...this.state.items];
  // var index = array.indexOf(item)
 // var index = array.indexOf(event.target.value)
 /* if (index !== -1) {
    array.splice(index, 1);
    this.setState({items: array});
  }
   console.log(index);*/
  //  array.splice(index, 1);
  //  console.log(array);
   // this.setState({items: array});
    }
  render() {
      return (
        <div className="container main-wrapper">
       <Header title="To Do List"/>
       <AddTaskForm addTask={ this.addTask } 
          handleInputChange={ this.handleInputChange }
          taskName={ this.state.task }/>
       <TaskList items={ this.state.items } 
       deleteTask={ this.deleteTask } />
        </div>
      )
  }
}

export default App;
