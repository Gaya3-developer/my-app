import React from 'react';
class AddTaskForm extends React.Component {
  render() {
      return (
        <div className="task-container">
        <form action="" className="add-task">
          <input type="text" id="task" name="task" placeholder="Enter Task" required/><br/>
          <button className="submit">Add</button>
        </form> 
        </div>
      )
  }
}

export default AddTaskForm;
