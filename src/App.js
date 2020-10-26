import React from 'react';
import './App.css';
class App extends React.Component {
  addTask = (e) => {
    e.preventDefault();
    var rows = "";
    var task=document.getElementById("task").value;
    if(task!=="")
    {
    rows+='<td><div class="checkbox-action"><input type="checkbox" id="action5" onClick="this.handleClick("action5","row5", e)"/></div></td>'
    +"<td>"+task+"</td>"
    +'<td><button class="delete-action" onClick="this.deleteAction("row5", e)">Delete</button></td>';
   
    var tbody = document.querySelector(".task-list tbody");
    var tr = document.createElement("tr");

    tr.innerHTML = rows;
    tbody.appendChild(tr)  
    }
  }
  deleteAction = (id,e) => {
  //  alert('row'+id);
  //  var row='row'+id;
    var x = document.getElementById(id);  
    x.style.display = "none"; 
}
handleClick = (actionid,rowid,e) => {
 // console.log(actionid+rowid);
  var checked= document.getElementById(actionid).checked;
  var x1 = document.getElementById(rowid);  
 // console.log(x1);
  if (checked === false)
       {
        x1.querySelector(".task-title").style.textDecoration = "none"; 
       }
     else
       {
        x1.querySelector(".task-title").style.textDecoration = "line-through"; 
       }   
}
  render() {
      return (
        <div className="container main-wrapper">
        <div className="header-container">
        <h1> To Do List </h1>
        </div>
        <div className="task-container">
        <form action="" className="add-task">
          <input type="text" id="task" name="task" placeholder="Enter Task" required/><br/>
          <button className="submit" onClick={(e) => this.addTask(e)}>Add</button>
        </form> 
        </div>
        <div className="task-list-container">
        <table className="task-list">
        <tbody>
        <tr className="active" id="row1">
            <td>
              <div className="checkbox-action">
                 <input type="checkbox" id="action1" onClick={(e) => this.handleClick('action1','row1', e)}/>
              </div>
            </td>
            <td>
              <div className="task-title">Buy Groceries</div>
            </td> 
            <td>
              <button className="delete-action" onClick={(e) => this.deleteAction('row1', e)}>Delete</button>
            </td>
          </tr>
          <tr id="row2">
          <td>
              <div className="checkbox-action">
                 <input type="checkbox" id="action2" onClick={(e) => this.handleClick('action2','row2', e)}/>
              </div>
            </td>
            <td>
              <div className="task-title">Feed Cat</div>
            </td> 
            <td>
              <button className="delete-action" onClick={(e) => this.deleteAction('row2', e)}>Delete</button>
            </td>
      </tr>
      <tr id="row3">
          <td>
              <div className="checkbox-action">
                 <input type="checkbox" id="action3" onClick={(e) => this.handleClick('action3','row3', e)}/>
              </div>
            </td>
            <td>
              <div className="task-title">Learn React</div>
            </td> 
            <td>
              <button className="delete-action" onClick={(e) => this.deleteAction('row3', e)}>Delete</button>
            </td>
      </tr> 
      <tr id="row4">
          <td>
              <div className="checkbox-action">
                 <input type="checkbox" id="action4" onClick={(e) => this.handleClick('action4','row4', e)}/>
              </div>
            </td>
            <td>
              <div className="task-title">Meet Dentist</div>
            </td> 
            <td>
              <button className="delete-action" onClick={(e) => this.deleteAction('row4', e)}>Delete</button>
            </td>
      </tr> 
      <tr id="row5">
          <td>
              <div className="checkbox-action">
                 <input type="checkbox" id="action5" onClick={(e) => this.handleClick('action5','row5', e)}/>
              </div>
            </td>
            <td>
              <div className="task-title">Laern Guitar</div>
            </td> 
            <td>
              <button className="delete-action" onClick={(e) => this.deleteAction('row5', e)}>Delete</button>
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
