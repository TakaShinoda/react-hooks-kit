// stateとdispatch(actionを送信する関数)を返すフック
// const [state, dispatch] = useReducer(reducer, stateの初期値)
import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + 1}
        case 'DECREMENT':
            return { count: state.count - 1}
        case 'RESET':
            return {count: 0}
        default:
            return state
    }
}


export const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    return (
        <div>
            <h1>useReducer</h1>
            <p>count: {state.count}</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
            <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
        </div>
    )
}
