// なぜContextを利用するのか
// グローバルなstateを作成できるから
// バケツリレーの解消の1つ

import React, { createContext, useContext, useState } from 'react'

const MyContext = createContext()


export const UseContext = () => {
    const [count, setCount] = useState(0)

    const value = {
        name: 'React',
        handleClick: () => setCount((count) => count + 1)
    }

    return (
        <div>
            <h1>useContext</h1>
            <p>count: {count}</p>
            <MyContext.Provider value={value}>
                <Child />
            </MyContext.Provider>
        </div>
    )
}

const Child = () => {
    return <GrandChild />
}

const GrandChild = () => {
    return <GreatGrandChild />
}
// Consumer: Contextオブジェクトから値を取得しているコンポーネント
// 下記はMyContextから値を取得しているのでConsumer
const GreatGrandChild = () => {
    // useContextを利用する事でMyContextの値を取得
    // useContextはContextオブジェクトの値を取得するフック
    const context = useContext(MyContext)
    return (
        <div>
            <p>{context.name}</p>
            <button onClick={context.handleClick}>Increment</button>
        </div>
    )
}
