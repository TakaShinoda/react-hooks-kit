import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [inputValue, setInputValue] = useState('react')
    const [query, setQuery] = useState(inputValue)

    useEffect(() => {
        console.log(document.getElementById("effectHook").innerText)
    })

    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true)

            const result = await axios(
                `https://hn.algolia.com/api/v1/search?query=${query}`
            )

            setItems(result.data.hits)
            setIsLoading(false)
        }
        fetchData()
    }, [query])

    return (
        <div>
            <h1>useEffect</h1>
            <p id="effectHook">You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>click</button>
            <br/>
            <form onSubmit={(e) => {
                e.preventDefault()
                setQuery(inputValue)
            }}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit">検索</button>
            </form>
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            )}
            <br/>
            
        </div>
    )
}
