// src/components/FlowExample.jsx
import React from 'react';
import FlowVisualizer, { bigArrow } from './Flow/FlowVisualizer.jsx';
import { MarkerType } from '@xyflow/react';

const nodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Inspectr Ingress' },
    position: { x: 0, y: 50 },
    sourcePosition: 'right'
  },
  {
    id: '2',
    type: 'event',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Inspectr Proxy', iconFrom: '#ff8c00', iconTo: '#ffd700' },
    position: { x: 300, y: 50 }
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Backend Service' },
    position: { x: 650, y: 25 },
    targetPosition: 'left'
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'Mock Service' },
    position: { x: 650, y: 100 },
    targetPosition: 'left'
  },
  {
    id: '5',
    type: 'output',
    data: { label: 'Inspectr App' },
    position: { x: 300, y: 150 },
    targetPosition: 'top'
  }
];

const edges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    label: 'Input → B',
    markerEnd: bigArrow(MarkerType.ArrowClosed)
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    label: 'B → A',
    markerEnd: bigArrow(MarkerType.ArrowClosed)
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    label: 'B → B',
    markerEnd: bigArrow(MarkerType.ArrowClosed)
  },
  {
    id: 'e-2-bot',
    source: '2',
    sourceHandle: 'bottom',
    target: '5',
    label: 'B → B',
    markerEnd: bigArrow(MarkerType.ArrowClosed)
  }
];

export default function FlowExample() {
  return (
    <FlowVisualizer nodeData={nodes} edgeData={edges} style={{ width: '100%', height: '200px' }} />
  );
}
