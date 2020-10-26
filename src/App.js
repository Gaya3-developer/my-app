import React from 'react';
import './App.css';
class App extends React.Component {
  render() {
      return (
        <div className="container main-wrapper">
        <div className="header-container">
        <h1> To Do List </h1>
        </div>
        <div className="task-container">
        <form action="" className="add-task">
          <input type="text" id="task" name="task" placeholder="Enter Task" required/><br/>
          <button className="submit">Add</button>
        </form> 
        </div>
        <div className="task-list-container">
        <table className="task-list">
        <tbody>
        <tr className="active" id="row1">
            <td>
              <div className="checkbox-action">
                 <input type="checkbox" id="action1"/>
              </div>
            </td>
            <td>
              <div className="task-title">Buy Groceries</div>
            </td> 
            <td>
              <button className="delete-action">Delete</button>
            </td>
          </tr>
          <tr id="row2">
          <td>
              <div className="checkbox-action">
                 <input type="checkbox" id="action2"/>
              </div>
            </td>
            <td>
              <div className="task-title">Feed Cat</div>
            </td> 
            <td>
              <button className="delete-action">Delete</button>
            </td>
      </tr>
      <tr id="row3">
          <td>
              <div className="checkbox-action">
                 <input type="checkbox" id="action3"/>
              </div>
            </td>
            <td>
              <div className="task-title">Learn React</div>
            </td> 
            <td>
              <button className="delete-action">Delete</button>
            </td>
      </tr> 
      <tr id="row4">
          <td>
              <div className="checkbox-action">
                 <input type="checkbox" id="action4"/>
              </div>
            </td>
            <td>
              <div className="task-title">Meet Dentist</div>
            </td> 
            <td>
              <button className="delete-action">Delete</button>
            </td>
      </tr> 
      <tr id="row5">
          <td>
              <div className="checkbox-action">
                 <input type="checkbox" id="action5"/>
              </div>
            </td>
            <td>
              <div className="task-title">Laern Guitar</div>
            </td> 
            <td>
              <button className="delete-action">Delete</button>
            </td>
      </tr> 
          </tbody>
        </table>
        </div>
        </div>
      )
  }
}

export default App;
