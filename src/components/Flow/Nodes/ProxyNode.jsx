// src/components/Flow/Nodes/ProxyNode.jsx
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import IconInspectr from '../IconInspectr.jsx';


import ProxyBadge from '../../../assets/icons/stack.svg?react';
import MockBadge from '../../../assets/icons/openapi.svg?react';
import CatchBadge from '../../../assets/icons/corner-down-left.svg?react';
import ShieldBadge from '../../../assets/icons/shield-keyhole-fill.svg?react';

const BADGE_ICONS = {
  proxy: ProxyBadge,
  mock:  MockBadge,
  catch: CatchBadge,
  guard: ShieldBadge,
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
    badge,
    width= 165,
    theme
  } = data;

  const BadgeIcon = badge ? BADGE_ICONS[badge] : null;

  const badgeClass = 'absolute -right-3 -top-4'
  const guardClass = 'absolute -left-3'

  const containerClass =
    theme === 'dark'
      ? 'border-gray-700 bg-gray-800'
      : theme === 'light'
        ? 'border-gray-200 bg-gray-100'
        : 'border-gray-200 dark:border-gray-700 dark:bg-gray-800';
  const labelClass =
    theme === 'dark' ? 'text-gray-200' : theme === 'light' ? 'text-gray-700' : 'dark:text-gray-200';
  const nodeStyle = { width };
  if (theme === 'dark') {
    nodeStyle.backgroundColor = '#1f2937';
    nodeStyle.borderColor = '#374151';
  } else if (theme === 'light') {
    nodeStyle.backgroundColor = '#f3f4f6';
    nodeStyle.borderColor = '#e5e7eb';
  }

  return (
    <div
      className={`react-flow__node-default flex flex-col items-center border-2 rounded-lg shadow-lg ${containerClass}`}
      style={nodeStyle}
    >

      {/* MODE BADGE */}
      {BadgeIcon && badge !== 'guard' &&  (
        <div
          className={`absolute -right-3 -top-4
            bg-white dark:bg-gray-800 p-0.5 rounded-lg 
            shadow-lg dark:shadow-gray-700 
            border-2 border-gray-200 dark:border-gray-700
          `}
        >
          <BadgeIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
      )}
      {BadgeIcon && badge === 'guard' &&  (
        <div
          className={`absolute -left-3 -top-3
            bg-white dark:bg-gray-800 p-0.5 rounded-lg 
            shadow-lg dark:shadow-gray-700 
            border-2 border-gray-200 dark:border-gray-700
          `}
        >
          <BadgeIcon className="w-5 h-5 text-green-500 dark:text-gray-400" />
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

        <div className={`leading-tight text-sm font-medium text-left ${labelClass}`}>
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
