import React from 'react'
import { useState } from 'react'
import ComponentA from './ComponentA.jsx'
import ComponentB from './ComponentB.jsx'

function StatusToggle() {
    const [status, setStatus] = useState(false);
    const handleClick = () => {
        setStatus(!status);
    };
    return (
        <div>
            <button onClick={handleClick}>Toggle Status</button>
            {status ? <ComponentA /> : <ComponentB />   }
        </div>
    );
}








export default StatusToggle