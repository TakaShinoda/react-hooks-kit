// React.memo
// コンポーネントをメモ化するReactのAPI
// メモ化とは計算結果を保持してそれを再利用する手法

import React, { useState } from 'react'

// React.memoはP炉psの等価性をチェックして再レンダーの判断
// つまり新しく渡されたPropsと前回のpropsを比較して等価であれば再レンダーせずにメモ化したコンポーネントを再利用する

// レンダーコストが高いコンポーネントをメモ化する
// 頻繁に再レンダーされるコンポーネントをメモ化する

const Child = React.memo(({count}) => {
    console.log('render Child')
    return <p>Child: {count}</p>
})

export const Hello = () => {
    console.log('render Hello App')
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <div>
            <h1>React.memo</h1>
            <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
            <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
            <p>App: {count1}</p>
            <Child count={count2} />
        </div>
    )
}

