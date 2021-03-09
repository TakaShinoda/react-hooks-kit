// メモ化されたコールバック関数を返すフック
// React.memoでメモ化したコンポーネントにuseCallbackでメモ化した関数をPropsとして渡す事で
// コンポーネントの不要な再レンダーをスキップできる

// useCallback(コールバック関数, 依存配列)

import React, { useState, useCallback } from 'react'

const Child = React.memo(({handleClick}) => {
    console.log('render Child')
    return <button onClick={handleClick}>Child</button>
})

export const UseCallback = () => {
    console.log('render App')
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        console.log('click')
    },[])

    return (
        <div>
            <h1>useCallback</h1>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment count</button>
            <Child handleClick={handleClick} />
        </div>
    )
}
