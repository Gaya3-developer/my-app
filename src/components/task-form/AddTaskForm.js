import React from 'react';
class Header extends React.Component {
  render() {
      return (
       <div className="task-container">
        <form action="" className="add-task" onSubmit={this.props.addTask}>
          <input type="text" id="task" name="task" placeholder="Enter Task" required value={this.props.taskName}  onChange={this.props.handleInputChange}/><br/>
          <button type="submit" className="submit">Add</button>
        </form> 
        </div>
      )
  }
}

export default Header;
