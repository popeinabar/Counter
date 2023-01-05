import { Component } from "react";


class Counter extends Component{
constructor(){
    super();
    this.state ={
        count:0
    }
}

Increment(){
    this.setState((previousState)=>({
        count : previousState.count + 1
    }))
}
decriment(){
    this.setState((previousState)=>({
        count : previousState.count  -  1
    }))
}
reset(){
    this.setState((previousState)=>({
        count : 0
    }))
}

render(){
    return(
        <div className="container">
            <h1>Counter App</h1>
            <h3>{this.state.count}</h3>
            <div id="btns">
            <button onClick={()=> this.Increment()}>+</button>
            <button onClick={()=> this.decriment()}>-</button>
            <button onClick={()=> this.reset()}>Reset</button>
            </div>
            </div>
        
    )

}

}

export default Counter