// src/components/FlowExampleIngress.jsx
import React from 'react';
import FlowVisualizer, { bigArrow } from '../Flow/FlowVisualizer.jsx';
import { MarkerType } from '@xyflow/react';

import ServiceIcon from '../../assets/icons/stack.svg?react';
import ZapIcon from '../../assets/icons/zap.svg?react';

export default function FlowExample() {
  const nodes = [
    // ─────── Group Nodes ───────
    {
      id: 'group_public',
      type: 'group',
      data: { label: 'https://hello.in-spectr.dev' },
      position: { x: 225, y: 5 },
      style: { width: 210, height: 100 },
    },
    {
      id: 'group_local',
      type: 'group',
      data: { label: 'Local Setup' },
      position: { x: 520, y: 5 },
      style: { width: 520, height: 220 },
    },

    // ─────── Regular Nodes ───────
    {
      id: '0',
      type: 'proxy',
      data: { label: 'Client', icon: ZapIcon, showLeft: false, width: 100,},
      position: { x: 0, y: 30 }
    }, {
      id: '1',
      type: 'proxy',
      data: { label: 'Inspectr Ingress', iconFrom: '#26ff00', iconTo: '#9fe491' },
      position: { x: 250, y: 30 },
      parentNode: 'group_public',
      extent: 'parent',
    }, {
      id: '2',
      type: 'proxy',
      data: { label: 'Inspectr Proxy', showBottom: true },
      position: { x: 550, y: 30 },
      parentNode: 'group_local',
      extent: 'parent',
    }, {
      id: '3',
      type: 'proxy',
      data: { label: 'Backend Service', icon: ServiceIcon, showRight: false },
      position: { x: 850, y: 30 },
      parentNode: 'group_local',
      extent: 'parent',
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
      position: { x:550, y: 145 },
      parentNode: 'group_local',
      extent: 'parent',
    }
  ];

  const edges = [
    { id: 'e-a-cl1', source: '0', sourceHandle: 'outRight', target: '1', targetHandle: 'inLeft' , label: 'Request', markerEnd: bigArrow(MarkerType.ArrowClosed)},
    { id: 'e-b-cl2', source: '1', sourceHandle: 'outLeft', target: '0', targetHandle: 'inRight' , label: 'Response', markerEnd: bigArrow(MarkerType.ArrowClosed)},
    { id: 'e-a-in1', source: '1', sourceHandle: 'outRight', target: '2', targetHandle: 'inLeft' , label: 'Event', markerEnd: bigArrow(MarkerType.ArrowClosed)},
    { id: 'e-b-in2', source: '2', sourceHandle: 'outLeft', target: '1', targetHandle: 'inRight' , label: 'Event', markerEnd: bigArrow(MarkerType.ArrowClosed)},
    { id: 'e-a-pr1', source: '2', sourceHandle: 'outRight', target: '3', targetHandle: 'inLeft' , label: 'Request', markerEnd: bigArrow(MarkerType.ArrowClosed)},
    { id: 'e-b-px2', source: '3', sourceHandle: 'outLeft', target: '2', targetHandle: 'inRight' , label: 'Response', markerEnd: bigArrow(MarkerType.ArrowClosed)},
    { id: 'e-2-app', source: '2', sourceHandle: 'bottom',  target: '5', targetHandle: 'top', label: 'Server-Sent Event', markerEnd: bigArrow(MarkerType.ArrowClosed)}
  ];

  return (
    <FlowVisualizer
      nodeData={nodes}
      edgeData={edges}
      style={{ width: '100%', height: '210px' }}
    />
  );
}
