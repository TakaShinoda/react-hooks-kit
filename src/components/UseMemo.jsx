// メモ化された値を返すフック
// useMemo(() => 値を計算するロジック, 依存配列)

import React, { useState, useMemo } from 'react'

export const UseMemo = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const double = count => {
        let i = 0
        while(i < 1000000000) i++
        return count * 2
    }

    // useMemoはレンダー結果もメモ化できる
    const Counter = useMemo(() => {
        console.log('render Counter')
        const doubleCount = double(count2)

        return(
            <p>Counter: {count2}, {doubleCount}</p>
        )
    }, [count2])

    // const doubleCount = useMemo(() => double(count2), [count2])

    return (
        <div>
            <h1>useMemo</h1>
            <h2>Increment count1</h2>
            <p>Counter: {count1}</p>
            <button onClick={() => setCount1(count1 + 1)}>Increment</button>
            <h2>Increment count2</h2>
            {/* <p>Counter: {count2}, {doubleCount}</p> */}
            {Counter}
            <button onClick={() => setCount2(count2 + 1)}>Increment(slow)</button>
        </div>
    )
}
