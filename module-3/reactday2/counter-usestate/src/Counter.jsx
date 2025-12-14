import React, { useState } from 'react'

const Counter = () => {
    const [state, setState] = useState(0)
   
  return (
   <>
    <h3>{state}</h3>
    <button onClick={() => setState((state) => state+1) }>Increment</button>
   </>
  )
}

export default Counter