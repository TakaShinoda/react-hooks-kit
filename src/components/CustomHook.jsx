// カスタムフックの使い所
// コンポーネント間でロジックを分離させたい・複雑なロジックをコンポーネントから分離させたい

import React, { useState } from 'react'

const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return { count, increment, decrement }
}

const IncrementCounter = () => {
    const { count, increment } = useCounter(0)

    return(
        <>
            <p>count: {count}</p>
            <button onClick={increment}>+</button>
        </>
    )
}
const DecrementCounter = () => {
    const { count, decrement } = useCounter(10)

    return(
        <>
            <p>count: {count}</p>
            <button onClick={decrement}>-</button>
        </>
    )
}

export const CustomHook = () => {
    return (
        <div>
            <h1>CustomHook</h1>
            <IncrementCounter />
            <DecrementCounter />
        </div>
    )
}
