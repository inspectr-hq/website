// src/components/DocFlows/FlowLocalOverride.jsx
import React from 'react';
import FlowVisualizer, { bigArrow } from '../Flow/FlowVisualizer.jsx';
import { MarkerType } from '@xyflow/react';

import clientIcon from '../../assets/icons/postman.svg?react';
import serviceIcon from '../../assets/icons/openapi.svg?react';

const nodes = [
  {
    id: '0',
    type: 'proxy',
    data: { label: 'Client', icon: clientIcon, showLeft: false, width: 100 },
    position: { x: 0, y: 30 }
  }, {
    id: '1',
    type: 'proxy',
    data: { label: 'Inspectr Proxy', showBottom: true },
    position: { x: 340, y: 30 }
  }, {
    id: '2',
    type: 'proxy',
    data: { label: 'Inspectr Mock', icon: serviceIcon, showRight: false },
    position: { x: 680, y: 30 }
  }, {
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
    position: { x:340, y: 145 }
  }
];

const edges = [
  { id: 'e-a-cl1', source: '0', sourceHandle: 'outRight', target: '1', targetHandle: 'inLeft' , label: '[inspectr-response-status: 503]', markerEnd: bigArrow(MarkerType.ArrowClosed)},
  { id: 'e-b-cl2', source: '1', sourceHandle: 'outLeft', target: '0', targetHandle: 'inRight' , label: 'Response HTTP 503', markerEnd: bigArrow(MarkerType.ArrowClosed)},
  { id: 'e-a-pr1', source: '1', sourceHandle: 'outRight', target: '2', targetHandle: 'inLeft' , label: 'Request HTTP 503', markerEnd: bigArrow(MarkerType.ArrowClosed)},
  { id: 'e-b-px2', source: '2', sourceHandle: 'outLeft', target: '1', targetHandle: 'inRight' , label: 'Response HTTP 503', markerEnd: bigArrow(MarkerType.ArrowClosed)},
  { id: 'e-2-app', source: '1', sourceHandle: 'bottom',  target: '5', targetHandle: 'top', label: 'Server-Sent Event', markerEnd: bigArrow(MarkerType.ArrowClosed), zIndex: 10}
];

export default function FlowLocalOverride() {
  return (
    <FlowVisualizer
      nodeData={nodes}
      edgeData={edges}
      style={{ width: '100%', height: '210px' }}
    />
  );
}
