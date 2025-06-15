// src/components/Flow/Nodes/GroupNode.jsx
import React from 'react';

export default function GroupNode({ data }) {
  return (
    <div className="relative bg-transparent">
      {/* label at top */}
      <div className="absolute -top-5 left-2 bg-white dark:bg-gray-800 px-1 text-xs font-semibold dark:text-gray-200">
        {data.label}
      </div>
    </div>
  );
}
