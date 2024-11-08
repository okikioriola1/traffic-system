import { useState, useEffect } from 'react';
import TrafficLight from './components/TrafficLight';

function App() {
  const [cycleCount, setCycleCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setCycleCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const getStreetAState = () => {
    const position = cycleCount % 4;
    if (position === 0) return 'green';
    if (position === 1 || position === 3) return 'yellow';
    return 'red';
  };

  const getStreetBState = () => {
    const position = cycleCount % 4;
    if (position === 0) return 'red';
    if (position === 1 || position === 3) return 'yellow';
    if (position === 2) return 'green';
    return 'red';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-[800px] h-[800px]">

        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-3xl font-bold">Street A</div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl font-bold">Street B</div>


        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[17rem] bg-gray-800 border-y-2 border-yellow-400" />
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-48 bg-gray-800 border-x-2 border-yellow-400" />


        <div className="absolute top-[2%] left-1/2 -translate-x-1/2">
          <TrafficLight state={getStreetAState()} direction="vertical" />
        </div>
        <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2">
          <TrafficLight state={getStreetAState()} direction="vertical" />
        </div>
        <div className="absolute top-1/2 left-[20%] -translate-y-1/2">
          <TrafficLight state={getStreetBState()} direction="vertical" />
        </div>
        <div className="absolute top-1/2 right-[20%] -translate-y-1/2">
          <TrafficLight state={getStreetBState()} direction="vertical" />
        </div>


        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
          <button
            onClick={() => setIsRunning(true)}
            className="w-32 px-6 py-3 bg-green-600 text-white rounded-lg block text-xl font-bold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setCycleCount(0);
            }}
            className="w-32 px-6 py-3 bg-green-600 text-white rounded-lg block text-xl font-bold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;