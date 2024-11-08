import React from 'react';

interface TrafficLightProps {
  state: 'red' | 'yellow' | 'green';
  direction: 'horizontal' | 'vertical';
}

const TrafficLight: React.FC<TrafficLightProps> = ({ state, direction }) => {
  return (
    <div className={`bg-yellow-400 p-3 rounded-lg shadow-xl border-2 border-yellow-500 ${direction === 'horizontal' ? 'flex' : 'flex-col'}`}>
      <div className={`flex ${direction === 'horizontal' ? 'flex-row' : 'flex-col'} gap-3`}>
        <div 
          className={`w-14 h-14 rounded-full ${
            state === 'red' 
              ? 'bg-red-600 shadow-inner ring-2 ring-red-700' 
              : 'bg-red-900/30'
          } transition-all duration-300`}
        />
        <div 
          className={`w-14 h-14 rounded-full ${
            state === 'yellow' 
              ? 'bg-yellow-300 shadow-inner ring-2 ring-yellow-400 animate-pulse' 
              : 'bg-yellow-900/30'
          } transition-all duration-300`}
        />
        <div 
          className={`w-14 h-14 rounded-full ${
            state === 'green' 
              ? 'bg-green-500 shadow-inner ring-2 ring-green-600' 
              : 'bg-green-900/30'
          } transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default TrafficLight;