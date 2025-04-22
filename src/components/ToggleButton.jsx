import { useState } from "react";



const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);
    const handleClick = () => setIsOn(!isOn);
    return (
      <div className={`p-4 bg-white shadow-md max-w-sm flex justify-center mx-auto rounded-lg ${isOn ? 'border' : 'bg-green-400'}`}>
        <button
          className={`px-4 py-2 rounded ${isOn ? 'bg-blue-500 text-white' : 'bg-gray-300'} hover:opacity-90`}
          onClick={handleClick}
        >
          {isOn ? 'On' : 'Off'}
        </button>
      </div>
    );
  };

export default ToggleButton