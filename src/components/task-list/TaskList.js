import React from 'react';
class TaskList extends React.Component {
  constructor(init){
    super(init);
    this.state = {
      textDecoration: ""
 }
    this.handleChange = this.handleChange.bind(this);
}
  handleChange({target}){
    console.log(target.checked);
    if (target.checked){
      console.log(target.checked);
     //  target.removeAttribute('checked');
      // target.classList ='.task-title';
     //  console.log(target.classList );
     //  let element=target.classList;
     //  element.style.bgColor= "red";""
     this.setState({textDecoration: "line-through"})
     console.log(this.state.textDecoration);
    } else {
      // target.setAttribute('checked', true);
      // target.parentNode.style.textDecoration = "line-through";
      this.setState({textDecoration: ""})
      console.log(this.state.textDecoration);
    }
}
  render() {
    const items = this.props.items;
  //  let btn_class = this.state.textDecoration;
  
      return (

        <div className="task-list-container">
           
            <table className="task-list">
              <tbody>
           
                {
                     this.props.items.length > 0 ?
                items.map(item => {
                  return (
                    <tr key={item.id}>
                        <td> <div className="checkbox-action">
                       
             
                 <input type="checkbox"
                        onChange={this.handleChange}
                       // defaultChecked={this.state.complete}
                  />
            
                {this.props.text}
            
              </div></td>
                      <td className="task-title" style={ { textDecoration:  this.state.textDecoration  } }>{item.task}</td>

                      <td>
              <button className="delete-action" onClick={()=>{if(window.confirm('Delete the item?')){this.props.deleteTask(item.id)};}}>Delete</button>
            </td>
                    </tr>
                  );
                }):<tr><td><p>Not Tasks Found</p></td></tr>
                
                }
                
              </tbody>
            </table>
            
          </div>
      )
  }
}

export default TaskList;
