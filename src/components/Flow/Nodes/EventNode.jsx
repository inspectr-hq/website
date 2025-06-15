// src/components/Flow/Nodes/EventNode.jsx
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import IconInspectr from '../IconInspectr.jsx';

export default function EventNode({ data }) {
  return (
    <div
      // className="react-flow__node-default flex flex-col items-center"
      className="react-flow__node-default flex flex-col items-center border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg dark:shadow-gray-800 dark:bg-gray-800"
    >
      {/* left input */}
      <Handle
        type="target"
        id="in"
        position={Position.Left}
        style={{ top: '50%' }}
      />

      {/* content */}
      {/*<div className="flex items-center p-1">*/}
      <div className="inline-flex items-center gap-1 w-auto">
        <div className="flex-shrink-0">
          <IconInspectr
            width={24}
            height={24}
            className="w-6 h-6"
            from={data.iconFrom}
            to={data.iconTo}
          />
        </div>

        <div className="leading-tight text-sm font-medium dark:text-gray-200">
          {data.label}
        </div>
      </div>

      {/* right output */}
      <Handle
        type="source"
        id="right"
        position={Position.Right}
        style={{ top: '50%' }}
      />

      {/* bottom output */}
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        style={{ left: '50%' }}
      />
    </div>
  );
}
