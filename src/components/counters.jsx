import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
  render() {
    console.log("counters - Renderd")
    const{onReset, counters, onDelete, onIncrement} = this.props; // object Distructring 
    return (
      <div>
        <button 
        onClick={onReset}
        className="btn btn-primary btn-sm btn m-2">Reset</button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            key={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    )
    // ""value" and "selected" come form the props that we set in the counter componant
  }
}

export default Counters
