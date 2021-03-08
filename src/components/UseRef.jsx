// refオブジェクト(React.createRefの戻り値)を返すフック
// refオブジェクトを利用することでDOMの参照や、コンポーネント内で値を保持
// useStateとは異なり、useRefで値を更新してもコンポーネントは再レンダーされない

import React, { useState, useEffect, useRef } from 'react'

export const UseRef = () => {
    // HTML 要素のref属性にRefオブジェクトを渡すと、Ref.currentにその HTML 要素が格納される
    const inputEl = useRef(null)
    const onClick = () => {
    console.log(inputEl)
        if(!inputEl.current) return

        inputEl.current.focus()
    }

    const [count, setCount] = useState(10)
    const [num, setNum] = useState(10)
    const prevCountRef = useRef(0)

    // 初回レンダーかどうかのフラグ
    const isInitialRender = useRef(true)

    useEffect(() => {
        prevCountRef.current = count
    })

    useEffect(() => {
        if(isInitialRender.current) {
            isInitialRender.current = false
        }
    })

    return (
        <div>
            <h1>useRef</h1>
            <p>{isInitialRender.current ? "初回レンダー" : "再レンダー" }</p>
            <p>num: {num}</p>
            <button onClick={() => setNum(num + 1)}>+</button>
            <br/>
            {/* ref属性にinputElを指定する事で、inputEl.currentでDOMにアクセスできる */}
            <input ref={inputEl} type="text"/>
            <br/>
            <button onClick={onClick}>input要素をフォーカスする</button>
            <br/>
            <p>現在のcount: {count}, 前回のcount: {prevCountRef.current}</p>
            <p>前回のcountより{prevCountRef.current > count ? "小さい" : "大きい"}</p>
            <button onClick={() => setCount(Math.floor(Math.random() * 11))}>
                update
            </button>
        </div>
    )
}
