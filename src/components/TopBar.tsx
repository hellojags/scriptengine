import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="p-2 bg-gray-100 border-b flex items-center space-x-2">
      {/* TODO: implement part toggle and actions */}
      <div className="flex space-x-1">
        <button className="btn">Part 1</button>
        <button className="btn">Part 2</button>
      </div>
      <button className="btn">Add Question</button>
      <button className="btn">Save</button>
      <button className="btn">Load</button>
    </div>
  );
};
