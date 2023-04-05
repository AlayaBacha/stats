
import './App.css';
import React from 'react';
import Pereson from './Component/Person';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      show : false
    }
  }
handleshow=()=> this.setState({show: !this.state.show})
render(){
  return(
    <div>
      <h1>STATS</h1>
      <div className='aa '>
     <button className='nn' onClick={this.handleshow}>{this.state.show? "hide" : "show"}</button>
     </div>
     {
    this.state.show && <Pereson/>
    }
    </div>
  )
}
}


export default App
