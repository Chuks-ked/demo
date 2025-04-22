import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const plusClick = () => setCount(count + 1);
    const minusClick = () => setCount(count - 1);

    return (
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg m-4">
          <h3 className="text-lg font-semibold mb-4">Counter: {count}</h3>
          <div className="flex space-x-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={plusClick}
            >
              Increment
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={minusClick}
            >
              Decrement
            </button>
        </div>
        </div>
    );
}

export default Counter