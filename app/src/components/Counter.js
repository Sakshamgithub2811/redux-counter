import React from 'react'
import {useSelector} from 'react-redux';

const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
  return (
    <div>
      <button>
        increment
      </button>
      <br/>
      <br/>
      <div>{count}</div>
      <button>
        decrement
      </button>
    </div>
  )
}

export default Counter
