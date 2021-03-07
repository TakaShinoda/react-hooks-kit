import React, { useState } from 'react'

export const UseState = () => {
    const [count, setCount] = useState(10)
    const [vote, setVote] = useState({kinoko: 0, takenoko: 0})
    const [items, setItems] = useState([{ name: "きのこ" }]);
    const decrement = () => {
        // countに依存する
        // setCount(count - 1)
        
        // 下記の書き方の方が外部に依存しない
        setCount((currentCount) => currentCount - 1)
    }
    const increment = () => {
        // setCount(count + 1)
        setCount((currentCount) => currentCount + 1)
    }
    const voteKinoko = () => {
        // 元のオブジェクトに同名プロパティがある場合は置き換わる
        // オブジェクトを扱う場合Object.isがtrueの場合は再レンダーしないので注意
        setVote({...vote, kinoko: vote.kinoko + 1})
    }
    const voteTakenoko = () => {
        setVote({...vote, takenoko: vote.takenoko + 1})
    }
    // const addItem = () => {
    //     const newItem = {
    //         name: Math.random() > 0.5 ? "きのこ" : "たけのこ"
    //     }
    //     setItems([...items, newItem])
    // }
    const addItem = () => {
        const newItem = {
          name: Math.random() > 0.5 ? "きのこ" : "たけのこ"
        };
        // 現在の items に newItem を追加した配列を setItems に渡す。
        setItems([...items, newItem]);
      };
    const deleteItem = (index) => {
        // filter() メソッドは、与えられた関数によって実装されたテストに合格したすべての配列からなる新しい配列を生成します。
        setItems(items.filter((_,i) => i !== index))
    }
    return (
        <div>
            <h1>useState</h1>
            <p>Count: {count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <br/>
            <p>きのこ: {vote.kinoko}</p>
            <p>たけのこ: {vote.takenoko}</p>
            <button onClick={voteKinoko}>きのこ</button>
            <button onClick={voteTakenoko}>たけのこ</button>
            <br/>
            <button onClick={addItem}>「きのこ」か「たけのこ」を追加</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name}
                        {/* 引数を使う場合は無名関数にしてクリックしときに実行されるようにする */}
                        <button onClick={() => deleteItem(index)}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
