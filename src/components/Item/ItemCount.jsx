import { useState } from "react"

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1)

    const increment = () => setCount((count) => count + 1)
    const decrement = () => setCount((count) => count - 1)

    function handleIncrement() {
        if (count === stock) return
        if (count >= 1) increment()
    }

    function handleDecrement() {
        if (count === 1) {
            return
        } else {
            decrement()
        }
    }

    return (
        <div className="flex justify-between items-center w-48 border-2 rounded-md px-4 py-1">
            <button className="text-blue-400" onClick={handleDecrement}>-</button>
            <span className={count === stock ? "text-red-500" : "text-current"}>{count}</span>
            <button className="text-blue-400" onClick={handleIncrement}>+</button>
        </div>
    )
}

export default ItemCount