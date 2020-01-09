import React, { useState } from 'react'

const CounterButton = () => {
    const [count, setCount] = useState(0)
    return <button id="CounterButton" onClick={() => setCount(count + 1)}>Count: {count}</button>
}

export default CounterButton
