import React from 'react';

export const SidePanel: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <aside className="w-64 p-4 border-l bg-white shadow-lg">
      {children}
    </aside>
  );
};
