import React from 'react';
import { Canvas } from './components/Canvas';
import { TopBar } from './components/TopBar';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex-1">
        <Canvas />
      </div>
    </div>
  );
};

export default App;
