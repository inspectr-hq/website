// src/components/FlowExample.jsx
import React from 'react';
import FlowVisualizer, { bigArrow } from './Flow/FlowVisualizer.jsx';
import { MarkerType } from '@xyflow/react';

const nodes = [
  {
    id: '0',
    type: 'proxy',
    data: { label: 'Client', showIcon: false, showLeft: false, width: 100 },
    position: { x: 0, y: 30 }
  },
  {
    id: '1',
    type: 'proxy',
    data: { label: 'Inspectr Proxy', showBottom: true },
    position: { x: 300, y: 30 }
  },
  {
    id: '2',
    type: 'proxy',
    data: { label: 'Backend Service', showIcon: false, showRight: false },
    position: { x: 650, y: 30 }
  },
  {
    id: '5',
    type: 'proxy',
    data: {
      label: 'Inspectr App',
      iconFrom: '#ff8c00',
      iconTo: '#ffd700',
      showTop: true,
      showLeft: false,
      showRight: false
    },
    position: { x: 300, y: 145 }
  }
];

const edges = [
  {
    id: 'e-a-cl1',
    source: '0',
    sourceHandle: 'outRight',
    target: '1',
    targetHandle: 'inLeft',
    label: 'localhost:8080',
    markerEnd: bigArrow(MarkerType.ArrowClosed)
  },
  {
    id: 'e-b-cl2',
    source: '1',
    sourceHandle: 'outLeft',
    target: '0',
    targetHandle: 'inRight',
    label: 'Response',
    markerEnd: bigArrow(MarkerType.ArrowClosed)
  },
  {
    id: 'e-a-pr1',
    source: '1',
    sourceHandle: 'outRight',
    target: '2',
    targetHandle: 'inLeft',
    label: 'Request',
    markerEnd: bigArrow(MarkerType.ArrowClosed)
  },
  {
    id: 'e-b-px2',
    source: '2',
    sourceHandle: 'outLeft',
    target: '1',
    targetHandle: 'inRight',
    label: 'Response',
    markerEnd: bigArrow(MarkerType.ArrowClosed)
  },
  {
    id: 'e-2-app',
    source: '1',
    sourceHandle: 'bottom',
    target: '5',
    targetHandle: 'top',
    label: 'Server-Sent Event',
    markerEnd: bigArrow(MarkerType.ArrowClosed)
  }
];

export default function FlowExample() {
  return (
    <FlowVisualizer nodeData={nodes} edgeData={edges} style={{ width: '100%', height: '170px' }} />
  );
}
