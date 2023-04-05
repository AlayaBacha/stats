import React from "react";
class Pereson extends React.Component{
    constructor(){
        super()
        this.state={
            count : 0
        }
    }
    componentDidMount(){

        setInterval(() => this.setState({count : this.state.count+1}), 1000);

    }
    componentWillUnmount(){
        
    }
    
    render(){
      
        return(
            <div className="islem">
                <h1>{this.state.count}</h1>
                <h1>Alaya Bacha</h1>
                
                <h2>Manzel Tmim</h2>
                <img className="bb" src="/alaya.jpg" alt="NOT FOUND"width={("200px")}></img>
                <h2>Fullstack JS</h2>

            </div>
        )
    }
}
export default Pereson