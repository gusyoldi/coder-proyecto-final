import { useState } from "react"

const ItemCount = () => {
    const [count, setCount] = useState(0)
    const [disableDecrement, setDisableDecrement] = useState(false)

    const increment = () => setCount((count) => count + 1)
    const decrement = () => setCount((count) => count - 1)

    function handleIncrement() {
        if (count > 0) {
            setDisableDecrement(false)
        }
        increment()
    }

    function handleDecrement() {
        if (count === 0) {
            setDisableDecrement(true)
        } else {
            decrement()
        }
    }

    return (
        <div className="flex justify-between items-center w-48 border-2 rounded-md px-4 py-1">
            <button className="text-blue-400" onClick={handleDecrement} disabled={disableDecrement}>-</button>
            <span>{count}</span>
            <button className="text-blue-400" onClick={handleIncrement}>+</button>
        </div>
    )
}

export default ItemCount