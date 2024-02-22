//import logo from './logo.svg';

// write regular javascript functions and hook into react hooks for statefulness 
import React from 'react';
class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      name:"Andrew", }
this.updateNameState=this.updateNameState.bind(this);
}
  updateNameState(){
    this.setState({
      name:"Andrew Peter"});
  }
render()
  {
    return(
    <div>
    <p>{this.state.name}</p>
    <button onClick={()=>this.updateNameState()}>Display Full Name</button>
    </div>
      );
  }
}
 export default App;