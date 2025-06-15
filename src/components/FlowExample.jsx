// src/components/FlowExample.jsx
import React from 'react';
import FlowVisualizer from './Flow/FlowVisualizer.jsx';
import { Position } from '@xyflow/react';

// Placeholder svg icon — swap in your real ones later
const PlaceholderIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" className="w-6 h-6 text-blue-500">
    <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" strokeWidth="2" />
  </svg>
);

const nodes = [
  {
    id: '1' /*type: 'custom',*/,
    position: { x: 0, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { icon: <PlaceholderIcon />, label: 'Client Request' }
  },
  // {
  //   id: '2',
  //   type: 'event',
  //   position: { x: 200, y: 0 },
  //   data: {
  //     mode: 'full',
  //     message: 'Payment Request',
  //     bgColor: '#fef3c7',
  //     color: '#d97706',
  //     group: { type: 'Team', value: 'Payments' },
  //   },
  // },
  {
    id: '2' /*type: 'custom',*/,
    position: { x: 200, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { icon: <PlaceholderIcon />, label: 'Inspect Ingress' }
  },
  {
    id: '3' /*type: 'custom',*/,
    position: { x: 400, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { icon: <PlaceholderIcon />, label: 'Inspect Proxy' }
  },
  {
    id: '4' /*type: 'custom',*/,
    position: { x: 600, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { icon: <PlaceholderIcon />, label: 'Backend' }
  },
  {
    id: '5' /*type: 'custom',*/,
    position: { x: 800, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { icon: <PlaceholderIcon />, label: 'Inspect Proxy' }
  },
  {
    id: '6' /*type: 'custom',*/,
    position: { x: 1000, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { icon: <PlaceholderIcon />, label: 'Inspect Ingress' }
  },
  {
    id: '7' /*type: 'custom',*/,
    position: { x: 1200, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { icon: <PlaceholderIcon />, label: 'Response' }
  }
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e5-6', source: '5', target: '6', animated: true },
  { id: 'e6-7', source: '6', target: '7', animated: true }
];

export default function FlowExample() {
  return <FlowVisualizer nodes={nodes} edges={edges} style={{ width: '100%', height: '400px' }} />;
}
