import React, { Component } from 'react'

class Counter extends Component {

    // state = {
    //     value: this.props.counter.value,
    //     tags: []
    // }

    // buttonClick = e => {
    //     // console.log('Hello', e);
    //     this.setState({value: this.state.value + 1});
    // };

    render() {
        
        const { counter, onIncrement, onDelete, onDecrement } = this.props;
        return ( 
            <div>
                {/* {this.props.children} */}
                <h4>Counter #{counter.id}</h4>
                <h6>{this.formatCount()}</h6>
                <button 
                    onClick={(e)=>onIncrement(counter)}
                    className= 'btn btn-secondary btn-sm'>Increment
                </button>
                <button onClick={(e)=>onDecrement(counter)} className="btn btn-secondary btn-sm m-2">Decrement</button>
                <button 
                    onClick={()=>onDelete(counter.id)}
                    className="btn btn-danger btn-sm m-2">Delete
                </button>
            </div>
         );
    }
    formatCount() {
        return this.props.counter.value === 0 ?
         <span className= 'badge badge-warning'>Zero</span> : <span className='badge badge-primary'>{this.props.counter.value}</span>
    }
}
 
export default Counter;