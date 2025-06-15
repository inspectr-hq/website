// src/components/Flow/Nodes/ProxyNode.jsx
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import IconInspectr from '../IconInspectr.jsx';


import ProxyBadge from '../../../assets/icons/stack.svg?react';
import MockBadge from '../../../assets/icons/openapi.svg?react';
import CatchBadge from '../../../assets/icons/corner-down-left.svg?react';

const MODE_ICONS = {
  proxy: ProxyBadge,
  mock:  MockBadge,
  catch: CatchBadge,
};

export default function ProxyNode({ data }) {

  const {
    label,
    iconFrom,
    iconTo,
    icon: IconComponent,
    showIcon = true,
    showTop = false,
    showLeft = true,
    showRight = true,
    showBottom = false,
    mode,
    width= 165
  } = data;

  const ModeIcon = mode ? MODE_ICONS[mode] : null;

  return (
    <div
      className="react-flow__node-default flex flex-col items-center border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg dark:shadow-gray-800 dark:bg-gray-800"
      style={{ width: width }}
    >

      {/* MODE BADGE */}
      {ModeIcon && (
        <div className="absolute -top-4 -right-3 bg-white dark:bg-gray-800 p-0.5 rounded-lg shadow-lg dark:shadow-gray-700 border-2 border-gray-200 dark:border-gray-700">
          <ModeIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
      )}

      {/* single top output */}
      {showTop && (
        <Handle
          type="target"
          id="top"
          position={Position.Top}
          style={{ left: '50%' }}
        />
      )}

      {/* two left input output */}
      {showLeft && (
        <>
          <Handle
            type="target"
            id="inLeft"
            position={Position.Left}
            style={{ top: '30%' }}
          />
          <Handle
            type="source"
            id="outLeft"
            position={Position.Left}
            style={{ top: '70%' }}
          />
        </>
      )}
      {/* content */}
      <div className="inline-flex items-center gap-1 w-auto">
        {showIcon && (
          <div className="flex-shrink-0">
            {IconComponent
              ? <IconComponent className="w-6 h-6 text-blue-500" />
              : <IconInspectr
                width={24}
                height={24}
                className="w-6 h-6"
                from={iconFrom}
                to={iconTo}
              />
            }
          </div>
        )}

        <div className="leading-tight text-sm font-medium text-left dark:text-gray-200">
          {label}
        </div>
      </div>

      {/* two right input output */}
      {showRight && (
        <>
          <Handle
            type="source"
            id="outRight"
            position={Position.Right}
            style={{ top: '30%' }}
          />
          <Handle
            type="target"
            id="inRight"
            position={Position.Right}
            style={{ top: '70%' }}
          />
        </>
      )}

      {/* bottom output */}
      {showBottom && (
        <Handle
          type="source"
          id="bottom"
          position={Position.Bottom}
          style={{ left: '50%' }}
        />
      )}
    </div>
  );
}
